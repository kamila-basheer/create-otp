import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  server_address: string = 'api';

  constructor(private http:HttpClient,private router:Router) { }

  sendOtp(email:any){
    
    return this.http.post(`${this.server_address}/sendOtp`, email);
    
  }

  checkOtp(otp:any){
    
    return this.http.post(`${this.server_address}/checkOtp`, otp);
    
  }
}
