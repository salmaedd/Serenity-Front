import { Component, OnInit } from '@angular/core';
import { EtpService } from '../../../services/suivi-etp/etp.service';


@Component({
  selector: 'app-list-etp',
  templateUrl: './list-etp.component.html',
  styleUrls: ['./list-etp.component.css']
})
export class ListEtpComponent implements OnInit {

  constructor(public etpService: EtpService) { }

  ngOnInit() {
    this.getEtps();
  }

  etps=[{nom:"",prenom:"",pu_affectation_depart:"",office:"",type_Etp:"",grade_Etp:"",projet_staffing:"",selfReferenceLink:"",Projet:{}}];
 
  getEtps(){
    this.etpService.recupEtps().subscribe(etps => {this.etps = etps.json();
      console.log(this.etps);
      
      });

  }
}
