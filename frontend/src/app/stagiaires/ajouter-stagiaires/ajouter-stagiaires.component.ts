import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/apiservice.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-ajouter-stagiaires',
  templateUrl: './ajouter-stagiaires.component.html',
  styleUrls: ['./ajouter-stagiaires.component.css']
})
export class AjouterStagiairesComponent implements OnInit {

  constructor(private service: ApiserviceService, private router: ActivatedRoute) { }

  msgErreur: any;
  msgSucces: any;
  getParamId: any;
  
  ngOnInit(): void {
    this.getParamId = this.router.snapshot.paramMap.get('idStagiaire')
    if (this.getParamId) {
      this.service.getSingleDataStagiaires(this.getParamId).subscribe((res) => {
        console.log("res >>>", res)
        this.stagiaireForm.patchValue({
          nomStagiaire: res.data[0].nomStagiaire,
        })

      })
    }
  }

  stagiaireForm = new FormGroup({
    'nomStagiaire': new FormControl('', Validators.required),
  });

  //Créer la stagiaire
  validerStagiaire() {
    if (this.stagiaireForm.valid) {
      this.service.ajouterStagiaires(this.stagiaireForm.value).subscribe((res => {
        this.stagiaireForm.reset()
        this.msgSucces = res.message

      }))
    }
    else {
      this.msgErreur = 'Tous les champs sont requis'
    }
  }

  //modifier la stagiaire
  modifierStagiaire() {
    if (this.stagiaireForm.valid) {
      this.service.updateStagiaires(this.stagiaireForm.value, this.getParamId).subscribe((res) => {
        this.msgSucces = res.message;
      })
    }
    else {
      this.msgErreur = "Tous les champs sont requis"
    }
  }


}
