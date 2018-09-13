import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { DisplayUserComponent } from './components/administration/display-user/display-user.component';
import { AddUserComponent } from './components/administration/add-user/add-user.component';
import { DisplayUserSingleComponent } from './components/administration/display-user-single/display-user-single.component';

const routes: Routes = [
  {
    path:"",
    component:DashboardComponent
  },
  {
    path:"administration/users",
    component:DisplayUserComponent
  },
  {
    path:"administration/adduser",
    component: AddUserComponent
  },
  {
    path:"administration/user/:id",
    component: DisplayUserSingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
