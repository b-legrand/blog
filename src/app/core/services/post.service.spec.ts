import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('PostService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [PostService],
      imports: [HttpClientTestingModule],
    }),
  );

  it('should be created', () => {
    const service: PostService = TestBed.get(PostService);
    expect(service).toBeTruthy();
  });
});
