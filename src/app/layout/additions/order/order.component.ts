import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../shared/services/order/order.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {

  cartId!: string

  orderData: FormGroup = new FormGroup({
    details: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^(010|011|012|015)[0-9]{8}$/)]),
    city: new FormControl(null, [Validators.required])
  })

  constructor(private _ActivatedRoute: ActivatedRoute, private _OrderService: OrderService) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((param) => { this.cartId = param.get('cartId')! })
  }

  payNow() {
    this._OrderService.checkOut(this.cartId, this.orderData.value).subscribe((res) => {
      window.open(res.session.url, '_self')
    })
  }
}
