import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
@Component({
  selector: 'app-lister-categories',
  templateUrl: './lister-categories.component.html',
  styleUrls: ['./lister-categories.component.css']
})
export class ListerCategoriesComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  categoryData : any;
  onSucces: any;


  ngOnInit(): void {
    this.getCategories()
  }
  
  /* Fonction pour afficher toutes les catégories*/

  getCategories(){
    this.service.getAllDataCategories().subscribe((res) => {
      this.categoryData = res.data
    })
  }

  /* Supprimer une catégorie */

  deleteCategorie(id:any)
  {
    this.service.supprimerCategorie(id).subscribe((res) => {
      this.onSucces = res.message
      this.getCategories()
    })
  }

}
