import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {UsersApiService} from '../../core/services/users-api.service';
import {MessagesApiService} from '../../core/services/messages-api.service';
import {AuthService} from '../../core/services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  public showMessages = false;
  public messages: IMessage[] = [];
  public messageForm: FormGroup;

  private destroy$$: Subject<void> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: UsersApiService,
    private auth: AuthService,
    private messagesApi: MessagesApiService,
    private fb: FormBuilder,
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
    if (this.auth.isAuthorized() && this.data.user.Id !== this.auth.payload.user.Id) {
      this.showMessages = true;
      this.messagesApi.getMessages(this.data.user.Id).subscribe((data) => {
        this.messages = data.items;
      });
      this.messageForm = this.fb.group({
        Message: ['', [Validators.required, Validators.maxLength(4096)]],
      });
    }
  }

  ngOnDestroy(): void {
    this.destroy$$.next();
    this.destroy$$.complete();
  }

  userById(id: number): IUser {
    if (id === this.data.user.Id) {
      return this.data.user;
    }
    if (id === this.auth.payload.user.Id) {
      return this.auth.payload.user;
    }
    return null;
  }

  postMessage(): void {
    if (this.messageForm.invalid) {
      return;
    }
    this.messagesApi.postMessage(this.data.user.Id, this.messageForm.value.Message).subscribe((m) => {
      this.messages.unshift(m);
      this.messageForm.reset();
    });
  }

}
