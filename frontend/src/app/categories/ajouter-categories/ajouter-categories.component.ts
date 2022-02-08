import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-ajouter-categories',
  templateUrl: './ajouter-categories.component.html',
  styleUrls: ['./ajouter-categories.component.css']
})
export class AjouterCategoriesComponent implements OnInit {

  constructor(private service:ApiserviceService, private routeur : ActivatedRoute) { }
  
  onError:any;
  onSucces:any;
  idParams: any;

  ngOnInit(): void {
    this.idParams = this.routeur.snapshot.paramMap.get('idCategorie');
    if(this.idParams)
    {
      this.service.getSingleDataCategorie(this.idParams).subscribe((res) => {
        this.categoriesForm.patchValue({
          nomCategorie : res.data[0].nomCategorie
          
        })
      });
    }
    
  }
  
  categoriesForm = new FormGroup({

    'nomCategorie' : new FormControl('', [Validators.required])
  })

  /*  ***** AJOUTER UNE CATEGORIE ***  */

  categoriesSubmit() 
  {
    if(this.categoriesForm.valid)
    {
      this.service.ajouterCategorie(this.categoriesForm.value).subscribe((res => {
        this.categoriesForm.reset()
        this.onSucces = res.message
        
      }))
    } else {
      this.onError = ' Veuillez remplir tous les champs'
    }
    
  }

  /******* MODIFIER UNE CATEGORIE ****** */

  modifierCategorie()
  {
    if(this.categoriesForm.valid)
    {
      this.service.modifierCategorie(this.categoriesForm.value, this.idParams).subscribe((res) => {
        this.onSucces = res.message
      })
    }
    else {
      this.onError = 'Veuillez remplir tous les champs'
    }
  }

}
