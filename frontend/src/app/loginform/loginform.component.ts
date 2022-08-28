import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  errors=null
  userData = {
  email:''
  };

  constructor(private _auth:AuthserviceService, private router:Router) { }

  ngOnInit(): void {
  }

  sendOtp(){

    this._auth.sendOtp(this.userData)
    .subscribe ((data:any)=>{
      // console.log(data);
   
      // localStorage.setItem('token', data.token);
      this.router.navigate(['checkOtp']);
    },err=>{
      this.errors=err.error.message;
      console.log(this.errors);
    })
      
  }

}
