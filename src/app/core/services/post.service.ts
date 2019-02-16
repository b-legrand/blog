import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../model';
import { posts } from '../__mocks__/data';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public posts$: BehaviorSubject<Post[]> = new BehaviorSubject(posts);

  constructor() { }

}
