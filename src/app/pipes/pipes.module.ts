import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from './safe-html.pipe';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SafeHtmlPipe,
    OrderByPipe
],
  exports: [
    SafeHtmlPipe
  ]
})
export class PipesModule {
  static forRoot() {
    return {
        ngModule: PipesModule,
        providers: [],
    };
 }
}
