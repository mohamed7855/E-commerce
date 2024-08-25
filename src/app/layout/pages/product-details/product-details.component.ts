import { Component } from '@angular/core';
import { Product } from '../../../shared/interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../shared/services/products/products.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  productId!: string
  product!: Product

  constructor(private _ActivatedRoute: ActivatedRoute, private _ProductsService: ProductsService) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(params => {
      this.productId = params.get('id')!;
      this._ProductsService.getSpecificProduct(this.productId).subscribe((res) => { this.product = res.data })
    })
  }
}
