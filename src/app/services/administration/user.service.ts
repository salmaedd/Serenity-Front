import { Injectable } from '@angular/core';
import{Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:8080"
  constructor(public http:Http) { }

  saveUser(user){
      return this.http.post(this.url+"/adduser",user);
  }

  recupeUsers(){
    return this.http.get(this.url+"/getuser");
  }
}
