import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';

import { PostComponent } from './post.component';
import { StripComponent } from '../strip/strip.component';
import { Post, postFactory } from '../../models';
import { RouterTestingModule } from '@angular/router/testing';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  const postInput: Post = postFactory({});
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent, MockComponent(StripComponent)],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    component.post = postInput;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
