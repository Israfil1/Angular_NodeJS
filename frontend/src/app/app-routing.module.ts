import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterFormationsComponent } from './formations/ajouter-formations/ajouter-formations.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AjouterFormateursComponent } from './Formateurs/ajouter-formateurs/ajouter-formateurs.component';
import { AjouterStagiairesComponent } from './stagiaires/ajouter-stagiaires/ajouter-stagiaires.component';
import { FormateursComponent } from './Formateurs/formateurs.component';
import { FormationsComponent } from './formations/formations.component';
import { StagiairesComponent } from './stagiaires/stagiaires.component';
import { PageNonTrouveeComponent } from './page-non-trouvee/page-non-trouvee.component';



const routes: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'formateurs',component: FormateursComponent},
  {path: 'formations',component: FormationsComponent},
  {path: 'stagiaires',component: StagiairesComponent},
  // {path: 'formateurs',component: FormateursComponent,
     
  //   children: [
  //               {path: 'ajouter-formateurs', component: AjouterFormateursComponent},
  //               {path: 'ajouter-formateurs/:id', component: AjouterFormateursComponent},
  //               {path: '**', component: PageNonTrouveeComponent}
  //   ]
  // },
  {path: 'formateurs/ajouter-formateurs', component: AjouterFormateursComponent},
  {path: 'formateurs/ajouter-formateurs/:id', component: AjouterFormateursComponent},
  {path:'formations/ajouter-formations', component: AjouterFormationsComponent},
  {path:'formations/ajouter-formations/:idFormation', component: AjouterFormationsComponent},
  {path:'stagiaires/ajouter-stagiaires', component: AjouterStagiairesComponent},
  {path:'stagiaires/ajouter-stagiaires/:idStagiaire', component: AjouterStagiairesComponent},
  {path: '**', component: PageNonTrouveeComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
