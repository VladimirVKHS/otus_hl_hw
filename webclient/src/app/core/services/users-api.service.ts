import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {Observable} from 'rxjs';
import {HttpParams} from '@angular/common/http';

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
