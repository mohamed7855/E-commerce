import { Component } from '@angular/core';
import { CartService } from '../../../shared/services/cart/cart.service';
import { CartItem } from '../../../shared/interfaces/cart';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartProducts: CartItem[] = [];

  constructor(private _CartService: CartService, private _ToastrService: ToastrService) { }

  ngOnInit(): void {
    if (typeof localStorage != 'undefined') {
      localStorage.setItem('currentPage', '/cart')
    }

    this._CartService.getCart().subscribe(res => { this.cartProducts = res.data.products })
  }

  removeProduct(pId: string) {
    this._CartService.removeCartItem(pId).subscribe(res => {
      this.cartProducts = res.data.products
      this._ToastrService.success("Product Deleted Successfully")
    })
  }

  editQuantity(newCount: number, pId: string) {
    if (newCount <= 0) {
      this.removeProduct(pId)
      return
    }
    this._CartService.updateCart(pId, newCount).subscribe(res => {
      this.cartProducts = res.data.products
      this._ToastrService.success("Product Quantity Updated Successfully")
    })
  }

}
