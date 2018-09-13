import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/administration/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-user-single',
  templateUrl: './display-user-single.component.html',
  styleUrls: ['./display-user-single.component.css']
})
export class DisplayUserSingleComponent implements OnInit {

  constructor(public userService: UserService, public route: ActivatedRoute) { }

  id: number = 0;
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getSinglerUser();
  }
  user = {};

  getSinglerUser(){
    this.userService.getOneUser(this.id).subscribe(user =>{
      this.user = user.json();
      console.log(this.user);
    });
  }

}
