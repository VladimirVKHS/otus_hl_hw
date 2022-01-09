import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit, OnDestroy {

  public data: IUserFullData;

  private destroy$$: Subject<void> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.data = this.activatedRoute.snapshot.data.user_data;
    this.activatedRoute.params.pipe(takeUntil(this.destroy$$)).subscribe(() => {
      this.data = this.activatedRoute.snapshot.data.user_data;
    });
  }

  ngOnDestroy(): void {
    this.destroy$$.next();
    this.destroy$$.complete();
  }

}
