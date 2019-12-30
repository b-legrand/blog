import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundPageComponent } from './pages/components/not-found-page/not-found-page.component';
import { PostsPageComponent } from './pages/components/posts-page/posts-page.component';
import { PagesModule } from './pages/pages.module';
import { PostPageComponent } from './post/components/post-page/post-page.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostsPageComponent,
    children: [{ path: '', pathMatch: 'full', component: PostPageComponent }],
  },
  {
    path: 'posts/first',
    component: PostPageComponent,
  },
  {
    path: 'posts/create',
    component: PostPageComponent,
  },
  {
    path: 'posts/last',
    component: PostPageComponent,
  },
  {
    path: 'posts/:slug',
    component: PostPageComponent,
    children: [{ path: 'reactions', pathMatch: 'full', component: PostPageComponent }],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/posts',
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
