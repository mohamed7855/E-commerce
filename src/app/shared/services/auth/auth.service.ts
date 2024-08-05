import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, Register } from '../../interfaces/register';
import { env } from '../../../Base/Environment';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private _HttpClient:HttpClient) { }
  sendRegister(data:Register):Observable<any>{
    return this._HttpClient.post(`${env.baseUrl}/api/v1/auth/signup`,data)
  }
  sendLogin(data:Login):Observable<any>{
    return this._HttpClient.post(`${env.baseUrl}/api/v1/auth/signin`,data)
  }
}
