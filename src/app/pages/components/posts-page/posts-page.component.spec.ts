import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsPageComponent } from './posts-page.component';
import { MockComponent } from 'ng-mocks';
import { PostComponent } from 'src/app/post/components/post/post.component';
import { PostService } from 'src/app/core/services/post.service';
import { of } from 'rxjs';

describe('PostsPageComponent', () => {
  let component: PostsPageComponent;
  let fixture: ComponentFixture<PostsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostsPageComponent, MockComponent(PostComponent)],
      providers: [{ provide: PostService, useValue: { posts$: of([])} }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
