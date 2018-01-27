import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/main/main.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogPostComponent } from './components/blog/blog-post/blog-post.component';
import { BlogCategoryComponent } from './components/blog/blog-category/blog-category.component';
import { BlogAllComponent } from './components/blog/blog-all/blog-all.component';
import { AboutComponent } from 'app/components/about/about.component';
import { ContactComponent } from 'app/components/contact/contact.component';
import { ServicesComponent } from 'app/components/services/services.component';

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
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
