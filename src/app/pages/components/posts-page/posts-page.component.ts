import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PostService } from 'src/app/core/services/post.service';
import { Post } from 'src/app/post/models';

@Component({
  selector: 'blg-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
})
export class PostsPageComponent implements OnInit {
  public posts: Post[];
  private subs: Subscription[] = [];
  constructor(private readonly postService: PostService) {}

  ngOnInit() {
    this.subs.push(
      this.postService.posts$.subscribe(posts => {
        console.log(posts);
        this.posts = posts;
      }),
    );
  }
}
