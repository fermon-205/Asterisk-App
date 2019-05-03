import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  constructor(
    private fb : FormBuilder
    ) {
      
     }


  /**
   * Create Form
   * Login Form 
   */
  createLogin(){
    this.loginForm = this.fb.group({
      email : ['', Validators.required],
      password : ['', Validators.required],
    });
  }

  onSubmit(params : { valid : boolean, value : User}){
      if(params.valid){
        console.log(params);
      }
  }

  ngOnInit() {
    this.createLogin();
  }

}
