import { Component, OnInit } from '@angular/core';
import { EtpService } from '../../../services/suivi-etp/etp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-etp',
  templateUrl: './add-etp.component.html',
  styleUrls: ['./add-etp.component.css']
})
export class AddEtpComponent implements OnInit {

  constructor(public etpService:EtpService, public route:Router ) { }

  etp=[{nom:"",prenom:"",pu_affectation_depart:"",office:"",type_Etp:"",grade_Etp:"",projet_staffing:"",selfReferenceLink:"",Projet:{}}];
  ngOnInit() {
  }


  addetp(){
    this.etpService.saveEtp(this.etp).subscribe(etp => {this.etp = etp.json();
      this.route.navigate(['suivi-etp/list-etp']);
      console.log(etp);
    });
  }

}
