import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { Post } from '../../post/models/post.model';
import { posts } from '../__mocks__/data';

@Injectable()
export class PostService implements OnInit {
  public posts$: BehaviorSubject<Post[]> = new BehaviorSubject(posts);

  constructor(private readonly httpClient: HttpClient) {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
