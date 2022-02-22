import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-feed-page-component',
  templateUrl: './feed-page-component.component.html',
  styleUrls: ['./feed-page-component.component.scss']
})
export class FeedPageComponentComponent implements OnInit {

  public postsResponse: IPostsResponse;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.postsResponse = this.activatedRoute.snapshot.data.feed;
  }

}
