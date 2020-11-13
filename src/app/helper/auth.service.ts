import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthService {

    constructor(
        private http : HttpClient
    ) { }
    
    getToken(){
        return localStorage.getItem('token');
      }

    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //     if (localStorage.getItem('token')) {
    //         return state.url.startsWith('/')
    //             ? true
    //             : (this.router.navigate(['/login']), false);

    //     } else {
    //         return state.url.startsWith('/')
    //             ? (this.router.navigate(['/login']), false)
    //             : true;
    //     }
    // }
}