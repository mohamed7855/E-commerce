import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login, Register } from '../../interfaces/register';
import { env } from '../../../Base/Environment';
import { jwtDecode } from "jwt-decode";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  userData: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (typeof document !== 'undefined') {
      if (localStorage.getItem('userToken')) {
        // this._Router.navigate([localStorage.getItem('currentPage')])
        this.getUserData()
      }
    }
  }

  sendRegister(data: Register): Observable<any> {
    return this._HttpClient.post(`${env.baseUrl}/api/v1/auth/signup`, data)
  }

  sendLogin(data: Login): Observable<any> {
    return this._HttpClient.post(`${env.baseUrl}/api/v1/auth/signin`, data)
  }

  getUserData() {
    this.userData.next(jwtDecode(JSON.stringify(localStorage.getItem('userToken'))));
  }

  // Forget Password
  verifyEmail(data: any): Observable<any> {
    return this._HttpClient.post(`${env.baseUrl}/api/v1/auth/forgotPasswords`, data)
  }

  verifyResetCode(data: any): Observable<any> {
    return this._HttpClient.post(`${env.baseUrl}/api/v1/auth/verifyResetCode`, data)
  }

  resetPassword(data: any): Observable<any> {
    return this._HttpClient.put(`${env.baseUrl}/api/v1/auth/resetPassword`, data)
  }
}
