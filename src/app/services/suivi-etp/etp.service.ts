import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class EtpService {
  url = "http://localhost:8080"
  constructor(public http:Http) { }

  
  saveEtp(etp){
    return this.http.post(this.url+"/addetp",etp);
}

  
  recupEtps(){

    return this.http.get(this.url+"/listetpdto");
  }
}
