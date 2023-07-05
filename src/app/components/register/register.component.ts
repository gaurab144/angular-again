import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  signUpForm: FormGroup;

  constructor(private _http: HttpClient, private router: Router) {
    this.signUpForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      number: new FormControl(),
      password: new FormControl()
    })
  }

  signUp() {
    console.log(this.signUpForm.value)
    this._http.post<any>("http://localhost:3000/profile", this.signUpForm.value).subscribe((res) => {
      alert('signup success');
      this.signUpForm.reset();
      this.router.navigate(['login'])
    },
      (err) => {
        alert('something went wrong')
      }
    )
  }


}
