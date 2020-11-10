import { BrowserModule } from '@angular/platform-browser';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RestApiService } from './sevices/rest-api.service';
import { DataService } from './sevices/data.service';

import { materialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { AuthGuardService } from './sevices/auth-guard.service';
import { UserlistComponent } from './userlist/userlist.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    MessageComponent,
    UserlistComponent
  ],
  imports: [
    materialModule,
    // NgbModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SweetAlert2Module
  ],
  providers: [
    RestApiService, DataService, AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
