import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {UsersApiService} from '../../core/services/users-api.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit, OnDestroy {

  @Input() user: IUser;

  public authorizedUserData: IAuthorizationPayload;
  public showAddFriend = false;
  public showRemoveFromFriends = false;

  private destroy$$: Subject<void> = new Subject();

  constructor(
    private auth: AuthService,
    private api: UsersApiService
  ) { }

  ngOnInit(): void {
    this.updateAuth();
    this.auth.authorized$.pipe(takeUntil(this.destroy$$)).subscribe(() => {
      this.updateAuth();
    });
  }

  ngOnDestroy(): void {
    this.destroy$$.next();
    this.destroy$$.complete();
  }

  addToFriends(user: IUser): void {
    this.api.addToFriends(user.Id).subscribe((r) => {
      this.authorizedUserData.friends = r.friends;
      this.authorizedUserData.outgoing_requests = r.outgoing_requests;
      this.authorizedUserData.incoming_requests = r.incoming_requests;
      this.auth.updatePayload(this.authorizedUserData);
      this.auth.authorized$$.next(true);
    }, () => {
      alert('Error!');
    });
  }

  removeFromFriends(user: IUser): void {
    this.api.removeFromFriends(user.Id).subscribe((r) => {
      this.authorizedUserData.friends = r.friends;
      this.authorizedUserData.outgoing_requests = r.outgoing_requests;
      this.authorizedUserData.incoming_requests = r.incoming_requests;
      this.auth.updatePayload(this.authorizedUserData);
      this.auth.authorized$$.next(true);
    }, () => {
      alert('Error!');
    });
  }

  private updateAuth(): void {
    this.authorizedUserData = this.auth.payload;
    if (!this.authorizedUserData || (this.authorizedUserData.user.Id === this.user.Id)) {
      this.showAddFriend = false;
      this.showRemoveFromFriends = false;
      return;
    }
    this.showRemoveFromFriends = !!this.authorizedUserData.outgoing_requests.find((u) => u.Id === this.user.Id) ||
      !!this.authorizedUserData.friends.find((u) => u.Id === this.user.Id);
    this.showAddFriend = !this.showRemoveFromFriends;
  }
}
