import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( public router: Router) {  }

  // tslint:disable-next-line: typedef
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (localStorage.getItem('token')) {
      return true;

      // return state.url.startsWith('/') ? true : (this.router.navigate(['/home']), false);
    }
    else{
      this.router.navigate(['/login']);
      return false;

      // return state.url.startsWith('/') ? (this.router.navigate(['/']), false) : true;
    }
  }

}
