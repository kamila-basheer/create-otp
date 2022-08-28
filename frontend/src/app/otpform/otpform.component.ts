import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';



@Component({
  selector: 'app-otpform',
  templateUrl: './otpform.component.html',
  styleUrls: ['./otpform.component.css']
})
export class OtpformComponent implements OnInit {

  errors=null
  UserData = {
  otp:''
  };

  constructor(private _auth:AuthserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  checkOtp(){

    this._auth.checkOtp(this.UserData)
    .subscribe ((data:any)=>{

      this.router.navigate(['welcome']);
    },err=>{
      this.errors=err.error.message;
      console.log(this.errors);
      alert("You have entered wrong OTP!")
      // this.router.navigate(['error']);
    })
      
  }

}
