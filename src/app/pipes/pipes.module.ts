import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from './safe-html.pipe';
import { OrderByPipe } from './order-by.pipe';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SafeHtmlPipe,
    OrderByPipe,
    TruncatePipe
],
  exports: [
    SafeHtmlPipe,
    OrderByPipe,
    TruncatePipe
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
