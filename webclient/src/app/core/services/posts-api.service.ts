import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {HttpParams} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsApiService {

  readonly endpoint = 'posts/';

  constructor(
    private api: ApiService,
  ) { }

  public createPost(request: IPostCreateRequest): Observable<IPost> {
    return this.api.post(
      this.endpoint,
      request
    );
  }

  public getUserFeed(): Observable<IPostsResponse> {
    return this.api.get(
      this.endpoint + 'feed',
    ).pipe(
      tap((response: IPostsResponse) => {
        response.items.forEach((post) => {
          post.user = response.users.find(u => u.Id === post.UserId);
        });
      })
    );
  }

}
