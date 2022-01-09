import { Injectable, Injector } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import {Router} from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService implements HttpInterceptor {

  constructor(
      private injector: Injector
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const auth = this.injector.get(AuthService);
      const router = this.injector.get(Router);
      const payload =  auth.payload;
      const token = payload ? payload.token : null;
      req = this.addToken(req, token);
      return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 403) {
            router.navigateByUrl('/');
          }
          throw error;
        })
      );
  }

  addToken(req: HttpRequest<any>, token: string|null): HttpRequest<any> {
      const requestOptions: any = {};
      if (req.body) {
          requestOptions.body = req.body;
      }
      if (token) {
          requestOptions.setHeaders = {
              Authorization: 'Bearer ' + token,
          };
      }
      return req.clone(requestOptions);
  }
}

