import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjouterFormateursComponent } from './Formateurs/ajouter-formateurs/ajouter-formateurs.component';
import { FormateursComponent } from './Formateurs/formateurs.component';
import { PageNonTrouveeComponent } from './page-non-trouvee/page-non-trouvee.component';


const routes: Routes = [

  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'formateurs',component: FormateursComponent},
  {path: 'formateurs/ajouter-formateurs', component: AjouterFormateursComponent},
  {path: 'formateurs/ajouter-formateurs/:id', component: AjouterFormateursComponent},
  {path: '**', component: PageNonTrouveeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
