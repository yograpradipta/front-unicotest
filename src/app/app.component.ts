import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './sevices/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pro';

  constructor(
    private router: Router,
    private data: DataService
  ){}

}
