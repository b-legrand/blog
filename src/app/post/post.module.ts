import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostComponent } from './components/post/post.component';
import { StripComponent } from './components/strip/strip.component';
import { CaseComponent } from './components/case/case.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    PostComponent,
    StripComponent,
    CaseComponent,
    PostPageComponent,
  ],
  exports: [PostComponent, StripComponent, CaseComponent, PostPageComponent],
  imports: [CommonModule, CoreModule],
  entryComponents: [PostPageComponent],
})
export class PostModule {}
