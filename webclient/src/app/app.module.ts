import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { Page404Component } from './pages/page404/page404.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { ProfileEditPageComponent } from './pages/profile-edit-page/profile-edit-page.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { CreatePostPageComponent } from './pages/create-post-page/create-post-page.component';
import { FeedPageComponentComponent } from './pages/feed-page-component/feed-page-component.component';
import { MessageCardComponent } from './components/message-card/message-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainMenuComponent,
    UserCardComponent,
    UserPageComponent,
    Page404Component,
    LoginPageComponent,
    RegistrationPageComponent,
    ProfileEditPageComponent,
    PostCardComponent,
    PostPageComponent,
    CreatePostPageComponent,
    FeedPageComponentComponent,
    MessageCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
