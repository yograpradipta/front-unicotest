import { Component, OnInit } from '@angular/core';
import { Home } from './home.model';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { DataService } from '../sevices/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  home: Home[] = [
    new Home(
      '../../assets/image/logo.png',
      '../../assets/image/1.png',
      '../../assets/image/2.png',
      '../../assets/image/3.png'
    ),
  ];

  slides = [
    { image: 'https://gsr.dev/material2-carousel/assets/demo.png' },
    { image: 'https://gsr.dev/material2-carousel/assets/demo.png' },
    { image: 'https://gsr.dev/material2-carousel/assets/demo.png' },
    { image: 'https://gsr.dev/material2-carousel/assets/demo.png' },
    { image: 'https://gsr.dev/material2-carousel/assets/demo.png' },
  ];
  collapsed = true;

  constructor(public router: Router, 
    public data: DataService,) {}
  logout(){
    this.data.user = {};
    localStorage.clear();
    this.router.navigate(['/']);
    // this.dialogRef.close("Logout Success");
  }

  ngOnInit(): void {}
}
