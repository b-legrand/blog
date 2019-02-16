import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/core/model';

@Component({
  selector: 'blg-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  public post: Post;

  constructor() { }

  ngOnInit() {
  }

}
