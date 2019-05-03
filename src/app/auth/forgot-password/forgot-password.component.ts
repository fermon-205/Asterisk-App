import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { changepassword } from 'src/app/shared/models/auth';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  public forgotForm : FormGroup;
  constructor(
    private fb : FormBuilder
  ) { this.createSignup(); }


    /**
   * Create Form
   * Signup Form 
   */
  createSignup(){
    this.forgotForm = this.fb.group({
      email : ['', Validators.required],
    });
  }


  onSubmit(params : { valid : boolean, value : changepassword}){
    if(params.valid){
      console.log(params);
    }
  }

  ngOnInit() {
  }

}
