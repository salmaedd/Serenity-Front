import { UserService } from './../../../services/administration/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit() {
    this.getUsers();
  }
  users = [{nom:"",prenom:"",email:"",login:"",password:"",office:"",profilRole:""}];
  
  getUsers(){
    this.userService.recupeUsers().subscribe(users => {this.users = users.json();
    console.log(this.users);
    
    });
  }

}
