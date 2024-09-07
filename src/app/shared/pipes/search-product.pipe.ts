import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'searchProduct',
  standalone: true
})
export class SearchProductPipe implements PipeTransform {

  transform(allProducts: Product[], keywordSearch: string): Product[] {
    if (!keywordSearch) return allProducts;
    return allProducts.filter(product => product.title.toLowerCase().includes(keywordSearch.toLowerCase()) || product.category.name.toLowerCase().includes(keywordSearch.toLowerCase()))
  }

}
