import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjouterFormateursComponent } from './Formateurs/ajouter-formateurs/ajouter-formateurs.component';
import { FormateursComponent } from './Formateurs/formateurs.component';
import { ListerFormateursComponent } from './Formateurs/lister-formateurs/lister-formateurs.component';
import { ModifierFormateursComponent } from './Formateurs/modifier-formateurs/modifier-formateurs.component';
import { SupprimerFormateursComponent } from './Formateurs/supprimer-formateurs/supprimer-formateurs.component';
import { PageNonTrouveeComponent } from './page-non-trouvee/page-non-trouvee.component';


const routes: Routes = [

  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'formateurs',component: FormateursComponent},
  {path: 'formateurs/lister-formateurs', component: ListerFormateursComponent},
  {path: 'formateurs/modifier-formateurs', component: ModifierFormateursComponent },
  {path: 'formateurs/supprimer-formateurs', component: SupprimerFormateursComponent},
  {path: 'formateurs/ajouter-formateurs', component: AjouterFormateursComponent},
  {path: '**', component: PageNonTrouveeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
