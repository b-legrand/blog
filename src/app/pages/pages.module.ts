import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { PostsPageComponent } from './components/posts-page/posts-page.component';

@NgModule({
  declarations: [NotFoundPageComponent, PostsPageComponent],
  exports: [NotFoundPageComponent],
  imports: [
    CommonModule
  ],
})
export class PagesModule { }
