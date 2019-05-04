import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'signup', component : SignupComponent},
  {path : 'forgot-password', component : ForgotPasswordComponent},
  {path : 'change-password', component : ChangePasswordComponent}, 
  {path : '' , component : HomeComponent}
];

@NgModule({  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
}) 
export class AuthRoutingModule { }
