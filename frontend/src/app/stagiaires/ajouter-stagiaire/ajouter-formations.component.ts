import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/apiservice.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-ajouter-formations',
  templateUrl: './ajouter-formations.component.html',
  styleUrls: ['./ajouter-formations.component.css']
})
export class AjouterFormationsComponent implements OnInit {

  constructor(private service: ApiserviceService, private router: ActivatedRoute) { }

  msgErreur: any;
  msgSucces: any;
  getParamId: any;
  
  ngOnInit(): void {
    this.getParamId = this.router.snapshot.paramMap.get('idFormation')
    if (this.getParamId) {
      this.service.getSingleData(this.getParamId).subscribe((res) => {
        this.formationForm.patchValue({
          nomFormation: res.data[0].nomFormation,
          dureeFormation: res.data[0].dureeFormation
        })

      })
    }
  }

  formationForm = new FormGroup({
    'nomFormation': new FormControl('', Validators.required),
    'dureeFormation': new FormControl('', Validators.required)
  });

  //Créer la formation
  validerFormation() {
    if (this.formationForm.valid) {
      this.service.creerFormation(this.formationForm.value).subscribe((res => {
        this.formationForm.reset()
        this.msgSucces = res.message

      }))
    }
    else {
      this.msgErreur = 'Tous les champs sont requis'
    }
  }

  //modifier la formation
  modifierFormation() {
    if (this.formationForm.valid) {
      this.service.updateData(this.formationForm.value, this.getParamId).subscribe((res) => {
        this.msgSucces = res.message;
      })
    }
    else {
      this.msgErreur = "Tous les champs sont requis"
    }
  }


}
