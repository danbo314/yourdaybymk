import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/main/main.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogPostComponent } from './components/blog/blog-post/blog-post.component';
import { BlogCategoryComponent } from './components/blog/blog-category/blog-category.component';
import { BlogAllComponent } from './components/blog/blog-all/blog-all.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'blog',
    component: BlogComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: 'all', component: BlogAllComponent },
      { path: 'post/:post', component: BlogPostComponent },
      { path: 'category/:category', component: BlogCategoryComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
