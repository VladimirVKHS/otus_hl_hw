import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {Observable} from 'rxjs';
import {HttpParams} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  readonly endpoint = 'users/';

  constructor(
    private api: ApiService,
  ) { }

  public getUsers(query: IItemsQuery = {}): Observable<IItemsResponse<IUser>> {
    return this.api.get(
      this.endpoint,
      {
        params: new HttpParams({
          fromObject: query as any
        })
      }
    );
  }

  public getUserPosts(userId: number, query: IItemsQuery = {}): Observable<IPostsResponse> {
    return this.api.get(
      this.endpoint + String(userId) + '/posts',
      {
        params: new HttpParams({
          fromObject: query as any
        })
      }
    ).pipe(
      tap((response: IPostsResponse) => {
        response.items.forEach((post) => {
          post.user = response.users.find(u => u.Id === post.UserId);
        });
      })
    );
  }

  public getUser(id: number): Observable<IUserFullData> {
    return this.api.get(this.endpoint + id);
  }

  public addToFriends(userId: number): Observable<IUserFullData> {
    return this.api.post(this.endpoint + userId + '/add_to_friends');
  }

  public removeFromFriends(userId: number): Observable<IUserFullData> {
    return this.api.post(this.endpoint + userId + '/remove_from_friends');
  }
}
