import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {UsersApiService} from '../../core/services/users-api.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit, OnDestroy {

  public data: IUserFullData;

  public posts: IPost[] = [];
  public postsResponse: IPostsResponse;

  public perPage = 10;

  private destroy$$: Subject<void> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: UsersApiService
  ) { }

  ngOnInit(): void {
    this.data = this.activatedRoute.snapshot.data.user_data;
    this.activatedRoute.params.pipe(takeUntil(this.destroy$$)).subscribe(() => {
      this.data = this.activatedRoute.snapshot.data.user_data;
    });
    this.api.getUserPosts(
      this.data.user.Id,
      {
        per_page: this.perPage
      }
    ).subscribe((response) => {
      this.postsResponse = response;
      this.posts = response.items;
    });
  }

  ngOnDestroy(): void {
    this.destroy$$.next();
    this.destroy$$.complete();
  }

}
