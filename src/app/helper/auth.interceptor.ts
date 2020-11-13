import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  constructor(private injector: Injector){

  }
  
  intercept(req, next) {
        const authToken = localStorage.getItem('token');
        const authRequest = req.clone({
          setHeaders:{
            Authorization: authToken
          }

        });

        return next.handle(authRequest);
      }
}
