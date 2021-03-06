import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from '../components/register/register.component';
import {LoginComponent} from '../components/login/login.component';
import {UsersComponent} from '../components/users/users.component';
import {AuthGuard} from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
];

// @ts-ignore
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
