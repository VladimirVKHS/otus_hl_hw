import { Component, OnInit } from '@angular/core';
import { UsersApiService } from '../../core/services/users-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public data: IItemsResponse<IUser> = null;

  constructor(
    private api: UsersApiService
  ) { }

  ngOnInit(): void {
    this.api.getUsers({per_page: 100000}).subscribe((r) => {
      this.data = r;
      console.log(r);
    });
  }

}
