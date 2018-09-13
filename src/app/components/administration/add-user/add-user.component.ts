import { UserService } from './../../../services/administration/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(public userService: UserService, public route:Router ){ }

  user ={nom:"",prenom:"",email:"",login:"",password:"",office:""};

  ngOnInit() {
  }

  adduser(){
    this.userService.saveUser(this.user).subscribe(user => {this.user = user.json();
      this.route.navigate(['administration/users']);
      console.log(user);
    });
  }
}
