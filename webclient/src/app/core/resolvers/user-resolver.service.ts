import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { UsersApiService } from '../services/users-api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<IUserFullData>{

  constructor(
    private api: UsersApiService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUserFullData> | Promise<IUserFullData> | IUserFullData {
    const id = route.paramMap.get('id');
    return this.api.getUser(Number(id));
  }
}
