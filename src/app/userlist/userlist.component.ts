import { Component, OnInit, ViewChild } from '@angular/core';
import { RestApiService } from '../sevices/rest-api.service';
import {MatTableDataSource} from '@angular/material/table';
import { IUserdata } from '../userdata';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  displayedColumns: string[] = ['no', 'name', 'email', 'birthday'];
  dataSource = new MatTableDataSource<IUserdata>();

  user: any;

  @ViewChild(MatSort, { static: false}) sort: MatSort;
  @ViewChild(MatPaginator, { static: false}) paginator: MatPaginator;

  constructor(private dataService: RestApiService, private route: Router) { }

  // tslint:disable-next-line: typedef
  getData(){
    console.log('data table User');

    this.dataSource = new MatTableDataSource([]);
    this.dataService.getUser().subscribe(
      allitems => {
        console.log('Table List User');
        this.dataSource= new MatTableDataSource(allitems['user']);
        console.log(allitems);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
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
                this.route.navigate(['/login']);
              }
            });
            this.route.navigate(['/login']);
          }
        }
      }
    );
  }

  ngOnInit(): void {
    this.getData();
  }
}
