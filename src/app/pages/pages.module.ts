import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { PostsPageComponent } from './components/posts-page/posts-page.component';
import { PostModule } from '../post/post.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [NotFoundPageComponent, PostsPageComponent],
  exports: [NotFoundPageComponent],
  imports: [
    CommonModule,
    CoreModule,
    PostModule,
  ],
})
export class PagesModule { }
