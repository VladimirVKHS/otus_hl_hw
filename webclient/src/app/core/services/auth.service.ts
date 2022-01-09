import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly cookieName = 'OTUS_SN_VK';
  readonly payloadKey = 'otus_sn_vk_payload';
  readonly storageName = this.cookieName;
  public authorized$$: BehaviorSubject<any> = new BehaviorSubject(this.isAuthorized());
  public get authorized$(): Observable<any> {
    return this.authorized$$.asObservable();
  }

  private storedPath_: string = null;
  public get storedPath() {
    const path = this.storedPath_;
    this.storedPath_ = null;
    return path;
  }
  public set storedPath(v) {
    this.storedPath_ = v;
  }

  constructor(
      private api: ApiService,
      private router: Router
  ) { }

  public login(request: ILoginRequest, savePassword = true): Observable<any> {
    return this.api.post('auth/login', request)
        .pipe(
            tap((payload: IAuthorizationPayload) => {
                this.handleAuthResponse(payload, savePassword);
                this.authorized$$.next(this.isAuthorized());
            }),
            catchError( err => {
                return throwError(err);
            })
        );
  }

  public registration(data: IUserProfile): Observable<IUser> {
    return this.api.post('auth/register', data);
  }

  public saveProfile(data: IUserProfile): Observable<IUser> {
    return this.api.post('profile', data);
  }

  public me(): Observable<IUserFullData> {
    return this.api.get('auth/me');
  }

  public logout(): Observable<any> {
    return new Observable((observer) => {
        observer.next(true);
        observer.complete();
    }).pipe(
        tap((response) => {
          this.sessionStorageSet(this.storageName, null);
          this.sessionStorageSet(this.payloadKey, null);
          this.localStorageSet(this.storageName, null);
          this.localStorageSet(this.payloadKey, null);
          this.authorized$$.next(false);
          this.router.navigateByUrl('/');
        })
    );
  }

  public isAuthorized(): boolean {
    return !!this.localStorageGet(this.storageName) || !!this.sessionStorageGet(this.storageName);
  }

  public get payload(): IAuthorizationPayload|null {
    if (!this.isAuthorized()) {
        return null;
    }
    let result = this.sessionStorageGet(this.payloadKey);
    if (!result) {
        result = this.localStorageGet(this.payloadKey);
    }
    return result;
  }

  public updatePayload(payload: IAuthorizationPayload): void {
    this.sessionStorageSet(this.payloadKey, payload);
    if (this.localStorageGet(this.payloadKey)) {
      this.localStorageSet(this.payloadKey, payload);
    }
  }

  private handleAuthResponse(payload: IAuthorizationPayload, savePassword = true): void {
      this.sessionStorageSet(this.storageName, true);
      this.sessionStorageSet(this.payloadKey, payload);
      if (savePassword) {
          this.localStorageSet(this.storageName, true);
          this.localStorageSet(this.payloadKey, payload);
      }
  }

  private sessionStorageSet(key: string, value: any): void {
    this.setStorageItem(sessionStorage, key, value);
  }

  private sessionStorageGet(key: string): any {
    return this.getStorageItem(sessionStorage, key);
  }

  private localStorageSet(key: string, value: any): void {
    this.setStorageItem(localStorage, key, value);
  }

  private localStorageGet(key: string): any {
    return this.getStorageItem(localStorage, key);
  }

  private setStorageItem(storage: Storage, key: string, value: any): void {
    const v = {value};
    storage.setItem(key, JSON.stringify(v));
  }

  private getStorageItem(storage: Storage, key: string): any {
    const json = storage.getItem(key);
    if (!json) {
      return null;
    }
    return JSON.parse(json).value;
  }

}
