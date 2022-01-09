import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl;

  constructor(
      private http: HttpClient
  ) {
      this.apiUrl = environment.apiUrl;
  }

  /**
   * Request to API
   */
  public request(request: HttpRequest<any>): Observable<any> {
      return this.http.request(request);
  }

  /**
   * JSONp request to API
   */
  public jsonp(url: string, callback: string): Observable<any> {
      url = this.removeSlash(url);
      return this.http.jsonp(this.apiUrl + url, callback);
  }

  /**
   * GET request to API
   */
  public get(url: string, options: any = {}): Observable<any> {
      url = this.removeSlash(url);
      return this.http.get(this.apiUrl + url, options);
  }

  /**
   * POST request to API
   */
  public post(url: string, body: any = null, options: any = {}): Observable<any> {
      url = this.removeSlash(url);
      return this.http.post(this.apiUrl + url, body, options);
  }

  /**
   * PUT request to API
   */
  public put(url: string, body: any, options: any = {}): Observable<any> {
      url = this.removeSlash(url);
      return this.http.put(this.apiUrl + url, body, options);
  }

  /**
   * DELETE request to API
   */
  public delete(url: string, options: any = {}): Observable<any> {
      url = this.removeSlash(url);
      return this.http.delete(this.apiUrl + url, options);
  }

  /**
   * PATCH request to API
   */
  public patch(url: string, body: any, options: any = {}): Observable<any> {
      url = this.removeSlash(url);
      return this.http.patch(this.apiUrl + url, body, options);
  }

  /**
   * OPTIONS request to API
   */
  public options(url: string, options: any = {}): Observable<any> {
      url = this.removeSlash(url);
      return this.http.options(this.apiUrl + url, options);
  }

  /**
   * HEAD request to API
   */
  public head(url: string, options: any = {}): Observable<any> {
      url = this.removeSlash(url);
      return this.http.head(this.apiUrl + url, options);
  }

  private removeSlash(url: string): string {
      const last = url.slice(-1);
      if (last === '/') {
          url = url.slice(0, url.length - 1);
      }

      return url;
  }
}
