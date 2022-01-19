import { Component, OnInit } from '@angular/core';
import { UsersApiService } from '../../core/services/users-api.service';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public perPage = 99;
  public data: IItemsResponse<IUser> = null;
  public users: IUser[] = [];
  public searchTerm = '';

  public totalPages = 0;

  public searchChanged$$: Subject<void> = new Subject();

  constructor(
    private api: UsersApiService
  ) { }

  ngOnInit(): void {
    this.initPage();
    this.searchChanged$$.pipe(debounceTime(400)).subscribe(() => {
      this.initPage();
    });
  }

  public nextPage(): void {
    this.api.getUsers({page: this.data.page +1, per_page: this.perPage, search: this.searchTerm}).subscribe((r) => {
      r.items.forEach(e => {
        this.users.push(e);
      });
      this.data = r;
    });
  }

  private initPage(): void {
    this.api.getUsers({per_page: this.perPage, search: this.searchTerm}).subscribe((r) => {
      this.data = r;
      this.users = r.items;
      this.totalPages = Math.ceil(r.total_items / r.per_page);
    });
  }

}
