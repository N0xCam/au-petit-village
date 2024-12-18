import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './products.service';
@Pipe({
  name: 'sortByName',
  standalone: true,
})
export class SortByNamePipe implements PipeTransform {
  transform(products: Product[], searchTerm: string): Product[] {
    if (!products || !searchTerm) {
      return products;
    }

      return products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }


  