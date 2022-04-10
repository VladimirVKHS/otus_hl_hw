import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesApiService {

  readonly endpoint = 'messages/';

  constructor(
    private api: ApiService,
  ) { }

  public getMessages(userId: number): Observable<IMessageResponse> {
    return this.api.get(this.endpoint + userId);
  }

  public postMessage(userId: number, message: string): Observable<IMessage> {
    return this.api.post(this.endpoint + userId, {
      Message: message
    });
  }
}
