import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostService } from './services/post.service';

@NgModule({
  declarations: [],
  providers: [PostService],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
