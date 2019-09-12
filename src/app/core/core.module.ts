import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostService } from './services/post.service';
import { EngineService } from './services/engine.service';

@NgModule({
  declarations: [],
  providers: [PostService, EngineService],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
