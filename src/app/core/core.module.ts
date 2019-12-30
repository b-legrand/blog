import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostService } from './services/post.service';
import { EngineService } from './services/engine.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  providers: [PostService, EngineService],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class CoreModule { }
