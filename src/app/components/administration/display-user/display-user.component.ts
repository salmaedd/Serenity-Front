import { UserService } from './../../../services/administration/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  constructor(public userService:UserService, public route:Router) { }

  ngOnInit() {
    this.getUsers();
    this.getProfils();
  }
  user = {
    id:0,
    nom : "",
    prenom:"",
    login:"",
    email:"",
    password:"",
    office:"",
    profil:{
      id:0
    }
  };

  profils = [{}];
  users = [{nom:"",prenom:"",email:"",login:"",password:"",office:"",profilRole:""}];
  selectedProfilId = 0;
  selectedUserId = 0;
  
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

     updateProfil(){
      this.user.profil.id = this.selectedProfilId;
      console.log("the user updated profil id "+ this.user.profil.id);
      this.userService.updateUserProfil(this.user).subscribe(updatedUser => {
        console.log("the updated user is");
        console.log(updatedUser);
        this.route.navigate(['/administration/users']);

      })
   }
    setUserId(id){
      this.selectedUserId = id;

      console.log("the selected user id"+ this.selectedUserId);
      this.getSinglerUser();
    }

  
  getSinglerUser(){
    this.userService.getTheUser(this.selectedUserId).subscribe(user =>{
      this.user = user.json();
      console.log("the selected user info: ");
      console.log(this.user);
    });
  }

}
