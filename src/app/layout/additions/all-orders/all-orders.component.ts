import { Component } from '@angular/core';
import { CartService } from '../../../shared/services/cart/cart.service';

@Component({
  selector: 'app-all-orders',
  standalone: true,
  imports: [],
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.scss'
})
export class AllOrdersComponent {

  constructor(private _CartService: CartService) { }

  ngOnInit(): void {
    if (typeof localStorage != 'undefined') {
      localStorage.setItem('currentPage', '/allorders')
    }

    // to handle error in backend
    this._CartService.clearCart().subscribe()
  }
}
