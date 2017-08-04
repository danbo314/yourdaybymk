import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ContainerComponent } from './components/container/container.component';
import { HomeComponent } from './components/main/main.component';
import { BlogComponent } from './components/blog/blog.component';
import { AppRoutingModule } from './app-routing.module';
import { SocialMediaComponent } from './components/social-media/social-media.component';

declare var require: any;

@NgModule({
  declarations: [
    ContainerComponent,
    HomeComponent,
    BlogComponent,
    SocialMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ContainerComponent]
})
export class AppModule {
}
