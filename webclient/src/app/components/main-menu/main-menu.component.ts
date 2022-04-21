import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {CountersApiService} from '../../core/services/counters-api.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit, OnDestroy {

  private destroy$$: Subject<void> = new Subject();

  public authorized: boolean;
  public data: IAuthorizationPayload;

  public counter: ICounter = null;

  constructor(
    private auth: AuthService,
    private countersApi: CountersApiService
  ) { }

  ngOnInit(): void {
    this.authorized = this.auth.isAuthorized();
    this.data = this.auth.payload;
    this.auth.authorized$.pipe(takeUntil(this.destroy$$)).subscribe(() => {
      this.authorized = this.auth.isAuthorized();
      this.data = this.auth.payload;
      if (this.authorized) {
        this.countersApi.getCounters().subscribe();
      } else {
        this.counter = null;
      }
    });
    this.countersApi.countersUpdate$.pipe(takeUntil(this.destroy$$)).subscribe((data) => {
      this.counter = data;
    });
    if (this.auth.isAuthorized()) {
      this.countersApi.getCounters().subscribe();
    }
  }

  ngOnDestroy(): void {
    this.destroy$$.next();
    this.destroy$$.complete();
  }

  logout(): void {
    this.auth.logout().subscribe(() => {});
  }

}
