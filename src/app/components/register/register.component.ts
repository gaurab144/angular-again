import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  signUpForm: FormGroup;

  constructor() {
    this.signUpForm= new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      number: new FormControl(),
      password: new FormControl()
    })
  }

  signUp(){
    console.log(this.signUpForm.value)
  }


}
