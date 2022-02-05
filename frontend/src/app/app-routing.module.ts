import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterFormationsComponent } from './formations/ajouter-formations/ajouter-formations.component';
import { ListerFormationsComponent } from './formations/lister-formations/lister-formations.component';


const routes: Routes = [
  {path:'lister-formations', component:ListerFormationsComponent},
  {path:'ajouter-formations', component:AjouterFormationsComponent},
  {path:'ajouter-formations/:idFormation', component:AjouterFormationsComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
