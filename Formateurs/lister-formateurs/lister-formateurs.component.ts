import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-lister-formateurs',
  templateUrl: './lister-formateurs.component.html',
  styleUrls: ['./lister-formateurs.component.css']
})
export class ListerFormateursComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  readData:any;
  successmsg:any;

  ngOnInit(): void {
    this.getAllData();
    }
  


  //Supprimer un formateur
  supprimerID(id:any)
  {
    this.service.supprimerFormateurs(id).subscribe((res)=>{
        this.successmsg = res.message;
        this.getAllData();
    });
  }

  getAllData()
  {
      this.service.getAllData().subscribe((res)=>{
      this.readData = res.data;
    });

  }
}
