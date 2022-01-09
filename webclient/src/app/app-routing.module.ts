import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserResolverService } from './core/resolvers/user-resolver.service';
import {Page404Component} from './pages/page404/page404.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { GuestOnlyGuard } from './core/guards/guest-only.guard';
import {RegistrationPageComponent} from './pages/registration-page/registration-page.component';
import {ProfileEditPageComponent} from './pages/profile-edit-page/profile-edit-page.component';
import {AuthorizedOnlyGuard} from './core/guards/authorized-only.guard';
import {ProfileResolverService} from './core/resolvers/profile-resolver.service';

const routes: Routes = [
  {
    path : '',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path : 'users/:id',
    component: UserPageComponent,
    pathMatch: 'full',
    resolve: {
      user_data: UserResolverService
    },
  },
  {
    path : 'login',
    component: LoginPageComponent,
    pathMatch: 'full',
    canLoad: [GuestOnlyGuard],
    canActivate: [GuestOnlyGuard],
    canActivateChild: [GuestOnlyGuard],
  },
  {
    path : 'registration',
    component: RegistrationPageComponent,
    pathMatch: 'full',
    canLoad: [GuestOnlyGuard],
    canActivate: [GuestOnlyGuard],
    canActivateChild: [GuestOnlyGuard],
  },
  {
    path : 'profile',
    component: ProfileEditPageComponent,
    pathMatch: 'full',
    canLoad: [AuthorizedOnlyGuard],
    canActivate: [AuthorizedOnlyGuard],
    canActivateChild: [AuthorizedOnlyGuard],
    resolve: {
      user_data: ProfileResolverService
    }
  },
  {
    path : '**',
    component: Page404Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
