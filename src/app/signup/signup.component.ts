import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../sevices/data.service';
import { RestApiService } from '../sevices/rest-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username = '';
  password = '';
  name = '';

  btnDisabled = false;
  

  constructor(
    private router: Router, 
    public data: DataService,
    private rest: RestApiService, 
    // public dialog   : MatDialog
    ){ }

  // tslint:disable-next-line: typedef
  validate(){
    if (this.name){
      if (this.username){
        if (this.password){
            this.data.success('success processed');
            return true;
        } else{
          this.data.error('Password is not entered');
          // this.openDialog();
        }
      } else {
        this.data.error('username is not entered');
        // this.openDialog();
      }
    } else {
      this.data.error('Name is not entered');
      // this.openDialog();
    }
  }

  async register(){
    this.btnDisabled = true;
    try{
      if (this.validate()){
        const data = await this.rest.post(
          'http://localhost:3030/app/signup',
          {
            name: this.name,
            username: this.username,
            password: this.password
            // birthday: this.birthday
          }
        );
        if (data['success']){
          localStorage.setItem('token', data['token']);
          this.data.success('Registration success!');
          this.router.navigate(['/home']);
          console.log(data['message'])
          // this.openDialog(); 
        } else {
          console.log('error')
          this.data.error(data['message']);
          // this.openDialog();
        }
      }
      else{
        console.log(this.data.message);
      }
    } catch (error) {
      this.data.error(error['message']);
      console.log(this.data['message']);
    }
    this.btnDisabled = false;
  }

  ngOnInit(): void {
  }

}
