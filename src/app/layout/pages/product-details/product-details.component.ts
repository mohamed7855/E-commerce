import { Component } from '@angular/core';
import { Product } from '../../../shared/interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../shared/services/products/products.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [ CarouselModule ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
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
