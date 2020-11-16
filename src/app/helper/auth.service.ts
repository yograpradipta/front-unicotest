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

}