import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from '../../../Base/Environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  userHeader: any = { 'token': localStorage.getItem('userToken') }

  constructor(private _HttpClient: HttpClient) { }

  checkOut(cartId: string, orderData: any): Observable<any> {
    return this._HttpClient.post(`${env.baseUrl}/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      { shippingAddress: orderData },
      { headers: this.userHeader })
  }
}
