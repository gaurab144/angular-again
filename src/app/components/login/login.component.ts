import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hideLoginPassword = true;
  logInForm= new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required,   Validators.minLength(4)])
  })

  constructor ( private auth: AuthService, private router: Router){ }

  ngOnInit(): void{
    if(this.auth.isLoggedIn()) {
      this.router.navigate(['home']);
    }
  }

  logIn(){
    if (this.logInForm.valid) {
      this.auth.login(this.logInForm.value).subscribe(
        (result) => {
          this.router.navigate(['home'])
        },
        (err: Error) => {
          alert(err.message);
        }
      )
    }
  }
  getErrorOnLogin(controlName: string){}


}
