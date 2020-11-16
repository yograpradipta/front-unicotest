import { Component, OnInit } from '@angular/core';
import { Home } from './home.model';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { DataService } from '../sevices/data.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RestApiService } from '../sevices/rest-api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  /* home: Home[] = [
    new Home(
      '../../assets/image/logo.png',
      '../../assets/image/1.png',
      '../../assets/image/2.png',
      '../../assets/image/3.png'
    ),
  ]; */

  slides = [
    { image: 'https://gsr.dev/material2-carousel/assets/demo.png' },
    { image: 'https://gsr.dev/material2-carousel/assets/demo.png' },
    { image: 'https://gsr.dev/material2-carousel/assets/demo.png' },
    { image: 'https://gsr.dev/material2-carousel/assets/demo.png' },
    { image: 'https://gsr.dev/material2-carousel/assets/demo.png' },
  ];
  collapsed = true;

  constructor(public router: Router, 
  public data: DataService, 
  private dataProfile: RestApiService) {}

  getProfile(){
    this.dataProfile.getDataProfile()
      .subscribe(
        res => this.dataProfile = res,
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 404) {
              console.log(err),
              Swal.fire({
                title: 'You are not logged in',
                text: 'please log in to access this page!',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Yes'
              }).then((result) => {
                if (result.isConfirmed) {
                  this.router.navigate(['/login']);
                }
              });
              this.router.navigate(['/login']);
            }
          }
        }
        );
  }

  logout(){
    Swal.fire({
      title: 'Are you sure to Logout?',
      // text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, i am sure!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.data.user = {};
        localStorage.clear();
        this.router.navigate(['/']);
      }
    })

  }

  ngOnInit(): void {
    this.getProfile();
  }
}
