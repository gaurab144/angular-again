import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url= 'http://localhost:3000/profile'

  constructor(private router: Router, private _http: HttpClient) { }


  findUser(): Observable<any[]> {
    return this._http.get<any[]>(this.url)
  }

  setToken(token: string): void{
    localStorage.setItem('token', token)
  }

  getToken(): string | null{
    return localStorage.getItem('token')
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }


}
