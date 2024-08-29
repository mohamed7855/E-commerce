import { CartService } from './../../../shared/services/cart/cart.service';
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ProductsService } from '../../../shared/services/products/products.service';
import { Product } from '../../../shared/interfaces/product';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  allProducts!: Product[]

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private _ProductsService: ProductsService, private _CartService: CartService, private _ToastrService: ToastrService) { }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('currentPage', '/home')
    }
    this._ProductsService.getAllProducts().subscribe(res => {
      this.allProducts = res.data
    })
  }

  addToCart(id: string) {
    this._CartService.addProductToCart(id).subscribe((res) => { this._ToastrService.success(res.message) })
  }

}
