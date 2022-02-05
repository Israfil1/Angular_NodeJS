import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListerFormationsComponent } from './formations/lister-formations/lister-formations.component';
import { AjouterFormationsComponent } from './formations/ajouter-formations/ajouter-formations.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNonTrouveeComponent } from './page-non-trouvee/page-non-trouvee.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListerFormateursComponent } from './Formateurs/lister-formateurs/lister-formateurs.component';
import { AjouterFormateursComponent } from './Formateurs/ajouter-formateurs/ajouter-formateurs.component';
import { ListerStagiairesComponent } from './stagiaires/lister-stagiaires/lister-stagiaires.component';
import { AjouterStagiairesComponent } from './stagiaires/ajouter-stagiaires/ajouter-stagiaires.component';
import { FormateursComponent } from './Formateurs/formateurs.component';
import { FormationsComponent } from './formations/formations.component';
import { StagiairesComponent } from './stagiaires/stagiaires.component';

import {HttpClientModule} from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FormationsComponent,
    ListerFormationsComponent,
    AjouterFormationsComponent,
    NavBarComponent,
    FormateursComponent,
    PageNonTrouveeComponent,
    AccueilComponent,
    StagiairesComponent,
    ListerFormateursComponent,
    AjouterFormateursComponent,
    ListerStagiairesComponent,
    AjouterStagiairesComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
