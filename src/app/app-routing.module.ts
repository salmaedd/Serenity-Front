import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { DisplayUserComponent } from './components/administration/display-user/display-user.component';
import { AddUserComponent } from './components/administration/add-user/add-user.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
