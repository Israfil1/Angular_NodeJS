import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNonTrouveeComponent } from './page-non-trouvee/page-non-trouvee.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListerFormateursComponent } from './Formateurs/lister-formateurs/lister-formateurs.component';
import { AjouterFormateursComponent } from './Formateurs/ajouter-formateurs/ajouter-formateurs.component';
import { ModifierFormateursComponent } from './Formateurs/modifier-formateurs/modifier-formateurs.component';
import { SupprimerFormateursComponent } from './Formateurs/supprimer-formateurs/supprimer-formateurs.component';
import { ApiserviceService } from './apiservice.service';
import { FormateursComponent } from './Formateurs/formateurs.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FormateursComponent,
    PageNonTrouveeComponent,
    AccueilComponent,
    ListerFormateursComponent,
    AjouterFormateursComponent,
    ModifierFormateursComponent,
    SupprimerFormateursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
