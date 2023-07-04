import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router){}
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot):boolean {
  //   if(!this.auth.isLoggedIn){
  //     this.router.navigate(['login'])
  //     return false;
  //   }
  //   return this.auth.isLoggedIn();
  // }


  canActivate(): boolean {
    if (this.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  private isAuthenticated(): boolean {
    // Check if the user is authenticated
    // Example: Check if a token exists in local storage
    const token = localStorage.getItem('token');
    return !!token;
  }
  
}
