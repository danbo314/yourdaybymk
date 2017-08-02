import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ContainerComponent } from './components/container/container.component';
import { HomeComponent } from './components/main/main.component';
import { BlogComponent } from './components/blog/blog.component';
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    ContainerComponent,
    HomeComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ContainerComponent]
})
export class AppModule { }
