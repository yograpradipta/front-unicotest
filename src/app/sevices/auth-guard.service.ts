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
      this.router.navigate(['/']);
      return false;
      // return state.url.startsWith('/')
      // ? true
      // : (this.router.navigate(['/']), false);
    }
    else{
      return true;
      // return state.url.startsWith('/')
      // ? (this.router.navigate(['/']), false)
      // : true;
    }
  }

}
