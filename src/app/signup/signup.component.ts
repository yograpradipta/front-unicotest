import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DataService } from '../sevices/data.service';
import { RestApiService } from '../sevices/rest-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email = '';
  password = '';
  confirmPassword = '';
  name = '';
  birthday = '';

  dialog = 'masukan password yang sama';
  btnDisabled = false;
  hide= true;
  
  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();

    // Highlight the 1st and 20th day of each month.
    return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
  }

  constructor(
    private router: Router,
    public data: DataService,
    private rest: RestApiService,
    ){ }

  // tslint:disable-next-line: typedef
  validate(){
    if (this.name){
      if (this.email){
        if (this.password){
          if(this.confirmPassword){
            if (this.birthday) {
              if (this.password == this.confirmPassword) {
                this.data.success('success processed');
                return true;
              }else{
                this.data.error('Password do not match');
              }
            }else{
              this.data.error('birthday is not entered');
            }
          }else{
            this.data.error('please enter confirm password!');
          }
        } else{
          this.data.error('Password is not entered');
        }
      } else {
        this.data.error('email is not entered');
      }
    } else {
      this.data.error('Name is not entered');
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
            email: this.email,
            password: this.password,
            birthday: this.birthday
          }
        );
        if (data['success']){
          localStorage.setItem('token', data['token']);
          this.data.success('Registration success!');
          this.router.navigate(['login']);
          console.log(data['message']);
          Swal.fire({
            // position: 'top-end',
            icon: 'success',
            title: 'Registration Success!',
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          console.log('error')
          this.data.error(data['message']);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data['message']
          });
        }
      }
      else{
        console.log(this.data.message);
        Swal.fire({
          icon: 'error',
          title: 'registration Error!',
          text: this.data['message']
        });
      }
    } catch (error) {
      this.data.error(error['message']);
      console.log(this.data['message']);
    }
    this.btnDisabled = false;
  }

  ngOnInit(): void {
    // if (this.password != this.confirmPassword) {
    //   this.dialog='password valid';
    // }
  }

}
