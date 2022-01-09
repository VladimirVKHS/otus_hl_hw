import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit, OnDestroy {

  private destroy$$: Subject<void> = new Subject();

  public authorized: boolean;
  public data: IAuthorizationPayload;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.authorized = this.auth.isAuthorized();
    this.data = this.auth.payload;
    this.auth.authorized$.pipe(takeUntil(this.destroy$$)).subscribe(() => {
      this.authorized = this.auth.isAuthorized();
      this.data = this.auth.payload;
    });
  }

  ngOnDestroy(): void {
    this.destroy$$.next();
    this.destroy$$.complete();
  }

  logout(): void {
    this.auth.logout().subscribe(() => {});
  }

}
