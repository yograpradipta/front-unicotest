import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../sevices/data.service';
import { RestApiService } from '../sevices/rest-api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username= '';
  password= '';

  btnDisabled= false;


  constructor(
    private router: Router,
    private data: DataService,
    private rest: RestApiService
  ) { }
  
  validate(){
    if (this.username) {
      if (this.password) {
        return true;
        this.data.success('login seccess');
      } else {
        this.data.error('please enter password');
      }
    } else {
      this.data.error('please enter username');
    }
  }

  async login(){
    this.btnDisabled= true;
    try {
      if (this.validate()) {
        const data= await this.rest.post(
          'http://localhost:3030/app/login',{
            username: this.username,
            password: this.password
          }
        );
        if (data['success']) {
          localStorage.setItem('token', data['token']);
          console.log(data['message']);
          this.data.success('login success');
          this.router.navigate(['/home']);
        }
        else{
          this.data.error(this.data['message']);
          console.log(this.data.message);
        }
      } else {
        this.data.error(this.data['message']);
        console.log(this.data.message);
      }
    } catch (error) {
      this.data.error(error['message']);
    }
    this.btnDisabled=false;
  }

  ngOnInit(): void {
  }

}
