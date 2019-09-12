import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post.model';


@Component({
  selector: 'blg-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input()
  public post: Post;

  constructor() {}

  ngOnInit() {}
}
