import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListerFormationsComponent } from './formations/lister-formations/lister-formations.component';
import { AjouterFormationsComponent } from './formations/ajouter-formations/ajouter-formations.component';

import {HttpClientModule} from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListerFormationsComponent,
    AjouterFormationsComponent,
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
