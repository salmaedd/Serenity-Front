import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { DisplayUserComponent } from './components/administration/display-user/display-user.component';
import { AddUserComponent } from './components/administration/add-user/add-user.component';


import { ListEtpComponent} from './components/suivi-etp/list-etp/list-etp.component';
import { AddEtpComponent } from './components/suivi-etp/add-etp/add-etp.component';
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
    path:"suivi-etp/list-etp",
    component: ListEtpComponent
  },

  { 

    path:"suivi-etp/add-etp",
    component:AddEtpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
