import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './sevices/auth-guard.service';
import { SignupComponent } from './signup/signup.component';
import { UserlistComponent } from './userlist/userlist.component';
const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    // canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [AuthGuardService]
  },
  {
    path: 'register',
    component: SignupComponent,
    // canActivate: [AuthGuardService]
  },
  {
    path:'home',
    component: HomeComponent,
    // canActivate: [AuthGuardService]
  },
  {
    path:'userlist',
    component: UserlistComponent,
    // canActivate: [AuthGuardService]
  },
  // {
  //   path:'**',
  //   redirectTo:''
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
