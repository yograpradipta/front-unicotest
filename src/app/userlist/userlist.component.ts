import { Component, OnInit, ViewChild } from '@angular/core';
import { RestApiService } from '../sevices/rest-api.service';
import {MatTableDataSource} from '@angular/material/table';
import { IUserdata } from '../userdata';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


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

  constructor(private dataService: RestApiService) { }

  // tslint:disable-next-line: typedef
  getData(){
    console.log('data table User');

    this.dataSource = new MatTableDataSource([]);
    this.dataService.getUser().subscribe(allitems => {
      console.log('Table List User');
      this.dataSource= new MatTableDataSource(allitems['user']);
      console.log(allitems);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit(): void {
    this.getData();
  }
}
