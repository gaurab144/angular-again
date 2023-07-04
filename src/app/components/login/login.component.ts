import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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

  constructor ( private auth: AuthService, private router: Router, private _http: HttpClient){ }

  ngOnInit(): void{
    if(this.auth.isLoggedIn()) {
      this.router.navigate(['home']);
    }
  } 

  logIn(){
    this._http.get<any>("http://localhost:3000/profile")
    .subscribe((res: any)=>{
      const user = res.find((a:any)=>{
        return a.email.includes(this.logInForm.value.email) && a.password === this.logInForm.value.password
      });

      if(user){
        localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImdhdXJhYiBzdWJiYSIsImVtYWlsIjoiMTQ0bGF6eUBnbWFpbC5jb20iLCJwaG9uZSI6Ijk4MDAwMDAwMCIsImlhdCI6MTUxNjIzOTAyMn0.ds1PLYv669tWIB8sNJj9OfqoLV0UZl_6jdSDKnAdneM");
        alert('login success');
        this.logInForm.reset();
        this.router.navigate(['home'])
      }else{
        alert('user not found')
      }
    },
    err=>{
      alert('something went wrong')
    })
  }
      

  getErrorOnLogin(controlName: string) {
    const control = this.logInForm.get(controlName);
    if (control?.hasError('required')) {
      return 'You must enter a value';
    }
    if (control?.hasError('minlength')) {
      return 'Password should contain min. of 8 characters';
    }
    return '';
  }

}


