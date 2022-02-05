import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.css']

})
export class FormateursComponent implements OnInit {

  card=false;
 
  

  cardListe(){

    this.card = ! this.card
    console.log('card',this.card)
        
  }

  // constructor(private routeur :RouterOutlet, private routeActive :ActivatedRoute) { }
  constructor() { }

  

  ngOnInit(): void {
  }

  

}


