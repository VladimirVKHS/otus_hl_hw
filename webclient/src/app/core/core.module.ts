import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import { ApiInterceptorService } from './services/api-interceptor.service';
import { UsersApiService } from './services/users-api.service';
import { GuestOnlyGuard } from './guards/guest-only.guard';
import {AuthorizedOnlyGuard} from './guards/authorized-only.guard';
import {PostsApiService} from './services/posts-api.service';
import {MessagesApiService} from './services/messages-api.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [
    ApiService,
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorService, multi: true},
    UsersApiService,
    PostsApiService,
    GuestOnlyGuard,
    AuthorizedOnlyGuard,
    MessagesApiService,
  ]
})
export class CoreModule { }
