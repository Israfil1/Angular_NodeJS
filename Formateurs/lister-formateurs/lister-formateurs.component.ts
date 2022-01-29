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

  ngOnInit(): void {
    this.service.getAllData().subscribe((res)=>{
        console.log(res,"res==>")
      this.readData = res.data;
    });
  }

}
