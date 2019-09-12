import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundPageComponent } from './pages/components/not-found-page/not-found-page.component';
import { PostsPageComponent } from './pages/components/posts-page/posts-page.component';
import { PagesModule } from './pages/pages.module';
import { PostPageComponent } from './post/components/post-page/post-page.component';

const routes: Routes = [
  {
    path: 'posts',
    pathMatch: 'full',
    component:  PostsPageComponent,
  },
  {
    path: 'post/:slug',
    component:  PostPageComponent,
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
