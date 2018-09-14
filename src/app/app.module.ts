import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './components/administration/add-user/add-user.component';
import { UserService } from './services/administration/user.service';
import { HttpModule } from '@angular/http';
import { DisplayUserComponent } from './components/administration/display-user/display-user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddEtpComponent } from './components/suivi-etp/add-etp/add-etp.component';
import { DetailEtpComponent } from './components/suivi-etp/detail-etp/detail-etp.component';
import { UpdateEtpComponent } from './components/suivi-etp/update-etp/update-etp.component';
import { ListEtpComponent } from './components/suivi-etp/list-etp/list-etp.component';
import { DeleteEtpComponent } from './components/suivi-etp/delete-etp/delete-etp.component';


@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    DisplayUserComponent,
    NavbarComponent,
    DashboardComponent,
    SidebarComponent,
    AddEtpComponent,
    DetailEtpComponent,
    UpdateEtpComponent,
    ListEtpComponent,
    DeleteEtpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
