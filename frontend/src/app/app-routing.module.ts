import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginformComponent } from './loginform/loginform.component';
import { OtpformComponent } from './otpform/otpform.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',redirectTo:'/sendOtp',pathMatch:'full'},
  {path: 'sendOtp', component:LoginformComponent },
  {path:'checkOtp',component:OtpformComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'error',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
