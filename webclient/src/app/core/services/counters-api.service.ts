import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountersApiService {

  readonly endpoint = 'counters/';

  private countersUpdates$$: Subject<ICounter> = new Subject<ICounter>();
  public get countersUpdate$(): Observable<ICounter> {
    return this.countersUpdates$$.asObservable();
  }

  private _counter: ICounter = null;
  public get counter(): ICounter {
    return this._counter;
  }
  public set counter(c: ICounter) {
    this._counter = c;
    this.countersUpdates$$.next(c);
  }

  constructor(
    private api: ApiService,
  ) { }

  public getCounters(): Observable<ICounter> {
    return this.api.get(
      this.endpoint
    ).pipe(
      tap((data) => {
        this.countersUpdates$$.next(data);
      })
    );
  }
}
