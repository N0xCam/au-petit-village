import { Pipe, PipeTransform } from '@angular/core';
import { ProductsComponent } from "./products/products.component"

@Pipe({
  name: 'sortByName'
})
export class SortByNamePipe implements PipeTransform {


  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }


}


  