import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserdata } from '../userdata';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  
  url = 'http://localhost:3030/app/user';
  urlProfile='http://localhost:3030/app/profile';
  // url = 'https://unicodev.herokuapp.com/app/user';

  constructor(private http: HttpClient ) { }
  
  // tslint:disable-next-line: typedef
  getHeaders(){
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders().set('Authorization', token) : null;
  }

  public getToken(){
    return localStorage.getItem('token');
  }

  public isLogin(){
    return !!this.getToken();
  }

  get(link:string){
    return this.http.get(link, {headers: this.getHeaders() }).toPromise();
  }

  post(link:string, body: any){
    return this.http.post(link, body, {headers: this.getHeaders() }).toPromise();
  }

  getUser(): Observable<IUserdata[]>{
    return this.http.get<IUserdata[]>(this.url);
  }

  getDataProfile(){
    return this.http.get<any>(this.urlProfile);
  }

}
