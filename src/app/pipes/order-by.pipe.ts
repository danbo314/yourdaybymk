import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order-by'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}