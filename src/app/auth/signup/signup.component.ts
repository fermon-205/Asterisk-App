import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usersignup } from 'src/app/shared/models/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm : FormGroup;
  constructor(
    private fb : FormBuilder
  ) { this.createSignup(); }

    /**
   * Create Form
   * Signup Form 
   */
  createSignup(){
    this.signupForm = this.fb.group({
      username : ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required],
    });
  }


  onSubmit(params : { valid : boolean, value : Usersignup}){
    if(params.valid){
      console.log(params);
    }
}


  ngOnInit() {
    
  }

}
