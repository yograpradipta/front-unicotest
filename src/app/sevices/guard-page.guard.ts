import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class GuardPageGuard implements CanActivate {
  
  constructor(
    private restApiService : RestApiService,
    private router: Route
  ){}
  
  // tslint:disable-next-line: typedef
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    let isLogin= this.restApiService.isLogin();
    return true;
  }
  
}
