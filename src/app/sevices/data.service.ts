// import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  message = '';
  messageType = 'danger';

  user: any;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.message = '';
      }
    });
  }

  // tslint:disable-next-line: typedef
  success(message) {
    this.messageType = ' danger';
    this.message = message;
  }
  // tslint:disable-next-line: typedef
  error(message) {
    this.messageType = ' success';
    this.message = message;
  }
  // tslint:disable-next-line: typedef
  warning(message) {
    this.messageType = ' warning';
    this.message = message;
  }
}
