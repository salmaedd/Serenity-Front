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

  getOneUser(id){
    return this.http.get(this.url+"/getuserdto/"+id);
  }

  getAllProfils(){
    return this.http.get(this.url+"/getprofildto");
  }

  //gets the user and not the dto
  getTheUser(id){
    return this.http.get(this.url+"/getuser/"+id);
  }

  updateUserProfil(user){
    return this.http.put(this.url+"/updateuser",user);
  }
}
