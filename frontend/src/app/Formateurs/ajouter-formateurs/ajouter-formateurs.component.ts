import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/apiservice.service';



@Component({
  selector: 'app-ajouter-formateurs',
  templateUrl: './ajouter-formateurs.component.html',
  styleUrls: ['./ajouter-formateurs.component.css']
})
export class AjouterFormateursComponent implements OnInit {

  constructor( private service:ApiserviceService, private routeur :ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;
  

  ngOnInit(): void {
    
    this.getparamid = this.routeur.snapshot.paramMap.get('id');
    if(this.getparamid)
    {
      this.service.getSingleDataFormateur(this.getparamid).subscribe((res)=>{
        this.formateursForm.patchValue({
          nomFormateur: res.data[0].nomFormateur,
          prenomFormateur: res.data[0].prenomFormateur,
          mailFormateur: res.data[0].mailFormateur
        })
         });
    }
    
    
    
  }

  formateursForm = new FormGroup({
    
    'nomFormateur' : new FormControl('',[Validators.required]),
    'prenomFormateur' : new FormControl('',[Validators.required]),
    'mailFormateur' : new FormControl('',[Validators.required]),

  });

  //Ajouter un formateur
  formateursSubmit()
  {
    if(this.formateursForm.valid)
    {
      console.log(this.formateursForm.value);
      this.service.ajouterFormateurs(this.formateursForm.value).subscribe((res)=>{
        console.log(res,'res==>');
        this.formateursForm.reset();
        this.successmsg = res.message;
      })

    }
    else
  {
    this.errormsg = 'Veuillez remplir tous les champs';
  }
  }
  

  //Modifier un formateur
  modifierFormateurs()
  {
      if(this.formateursForm.valid)
      {
          this.service.modifierFormateurs(this.formateursForm.value,this.getparamid).subscribe((res)=>{
              this.successmsg = res.message;
          });
      }
      else
      {
          this.errormsg = 'Veuillez remplir tous les champs'
      }
  }

 


}
