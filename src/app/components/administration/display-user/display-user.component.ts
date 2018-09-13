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
    this.getProfils();
  }
  profils = [{}];
  users = [{nom:"",prenom:"",email:"",login:"",password:"",office:"",profilRole:""}];
  selectedProfilId = 0;
  
  getUsers(){
    this.userService.recupeUsers().subscribe(users => {this.users = users.json();
    console.log(this.users);
    
    });
  }
  
   getProfils(){
     this.userService.getAllProfils().subscribe(profils => {
       this.profils = profils.json();
       console.log(this.profils);
     })  
    } 

    updateSelectedProfilId(id){
       this.selectedProfilId = id;
       console.log(this.selectedProfilId);
    }

}
