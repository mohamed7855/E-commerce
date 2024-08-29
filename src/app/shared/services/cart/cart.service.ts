import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../../Base/Environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  userHeader: any = { 'token': localStorage.getItem('userToken') }

  constructor(private _HttpClient: HttpClient) { }

  getCart(): Observable<any> {
    return this._HttpClient.get(`${env.baseUrl}/api/v1/cart`,
      { headers: this.userHeader })
  }

  addProductToCart(productId: string): Observable<any> {
    return this._HttpClient.post(`${env.baseUrl}/api/v1/cart`,
      { "productId": productId },
      { headers: this.userHeader })
  }

  removeCartItem(productId: string): Observable<any> {
    return this._HttpClient.delete(`${env.baseUrl}/api/v1/cart/${productId}`,
      { headers: this.userHeader })
  }

  updateCart(pId: string, count: number): Observable<any> {
    return this._HttpClient.put(`${env.baseUrl}/api/v1/cart/${pId}`,
      { count: count },
      { headers: this.userHeader })
  }

  clearCart(): Observable<any> {
    return this._HttpClient.delete(`${env.baseUrl}/api/v1/cart`,
      { headers: this.userHeader })
  }
}
