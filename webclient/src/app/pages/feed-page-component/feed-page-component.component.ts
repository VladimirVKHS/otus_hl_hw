import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../environments/environment';
import {AuthService} from '../../core/services/auth.service';

declare var io;

let eventsCreated = false;

@Component({
  selector: 'app-feed-page-component',
  templateUrl: './feed-page-component.component.html',
  styleUrls: ['./feed-page-component.component.scss']
})
export class FeedPageComponentComponent implements OnInit, OnDestroy {

  public postsResponse: IPostsResponse;
  public socket: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.socket = io(environment.wsUrl, {
      transports: ['websocket']
    });
    this.socket.connect();
    if (!eventsCreated) {

      this.socket.on('connect', () => {
        console.log('user connected');
        this.socket.emit('authorization', this.auth.payload.token);
      });

      this.socket.on('disconnect', () => {
        console.log('user disconnected');
      });

      this.socket.on('new_post_for_feed', (res: IPostsResponse) => {
        console.log('new post: ', res);
        const post = res.items[0];
        post.user = res.users[0];
        this.postsResponse.items.unshift(post);
      });
      eventsCreated = true;
    }
    this.postsResponse = this.activatedRoute.snapshot.data.feed;
  }

  ngOnDestroy(): void {
    if (this.socket) {
      console.log('disconnect');
      this.socket.disconnect();
      this.socket.destroy();
    }
  }

}
