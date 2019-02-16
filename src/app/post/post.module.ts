import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostComponent } from './components/post/post.component';
import { StripComponent } from './components/strip/strip.component';
import { CaseComponent } from './components/case/case.component';
import { PostRoutingModule } from './post-routing.module';
import { PostPageComponent } from './components/post-page/post-page.component';

@NgModule({
  declarations: [PostComponent, StripComponent, CaseComponent, PostPageComponent],
  exports: [PostComponent, StripComponent, CaseComponent, PostPageComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
  ],
})
export class PostModule { }
