import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../../apiservice.service';

@Component({
  selector: 'app-lister-stagiaires',
  templateUrl: './lister-stagiaires.component.html',
  styleUrls: ['./lister-stagiaires.component.css']
  
})
export class ListerStagiairesComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  stagiairesDonnee:any;
  suppStagiaire:any;

  ngOnInit(): void {
    this.getStagiaires()
  }

  //afficher les stagiaires
  getStagiaires()
  {
  this.service.getAllDataStagiaires().subscribe((res => {
    this.stagiairesDonnee = res.data
  }))
}

  //suppression de l'id
  supprimerIdStagiaire(id:any) {
    this.service.supprimerStagiaires(id).subscribe((res) =>{
      this.suppStagiaire = res.message
      this.getStagiaires()
    })
  }
}

