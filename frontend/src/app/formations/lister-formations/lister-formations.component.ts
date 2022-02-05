import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../../apiservice.service';

@Component({
  selector: 'app-lister-formations',
  templateUrl: './lister-formations.component.html',
  styleUrls: ['./lister-formations.component.css']
})
export class ListerFormationsComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  lectureDonnee:any;
  suppSuccess:any;

  ngOnInit(): void {
    this.getFormations()
  }

  //afficher les formations
  getFormations()
  {
  this.service.getAllData().subscribe((res => {
    this.lectureDonnee = res.data
  }))
}

  //suppression de l'id
  supprimerId(id:any) {
    this.service.supprimerFormation(id).subscribe((res) =>{
      this.suppSuccess = res.message
      this.getFormations()
    })
  }
}

