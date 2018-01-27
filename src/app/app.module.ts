import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ContainerComponent } from './components/container/container.component';
import { HomeComponent } from './components/main/main.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogPostComponent } from './components/blog/blog-post/blog-post.component';
import { BlogCategoryComponent } from './components/blog/blog-category/blog-category.component';
import { BlogAllComponent } from './components/blog/blog-all/blog-all.component';
import { AppRoutingModule } from './app-routing.module';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import 'hammerjs';
import 'mousetrap';
import { ModalGalleryModule } from 'angular-modal-gallery';

import { PipesModule } from './pipes/pipes.module';

import 'firebase/storage';
import { AboutComponent } from 'app/components/about/about.component';
import { ContactComponent } from 'app/components/contact/contact.component';
import { ServicesComponent } from 'app/components/services/services.component';

declare var require: any;

@NgModule({
  declarations: [
    ContainerComponent,
    HomeComponent,
    BlogComponent,
    BlogPostComponent,
    SocialMediaComponent,
    BlogCategoryComponent,
    BlogAllComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    PipesModule.forRoot(),
    ModalGalleryModule.forRoot()
  ],
  exports: [
    PipesModule
  ],
  providers: [],
  bootstrap: [ContainerComponent]
})
export class AppModule {
}
