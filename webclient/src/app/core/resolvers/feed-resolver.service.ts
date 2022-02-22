import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {PostsApiService} from '../services/posts-api.service';

@Injectable({
  providedIn: 'root'
})
export class FeedResolverService implements Resolve<IPostsResponse> {

  constructor(
    private api: PostsApiService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<IPostsResponse> | Promise<IPostsResponse> | IPostsResponse {
      return this.api.getUserFeed();
    }
}
