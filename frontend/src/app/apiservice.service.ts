import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { ThrowStmt } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http: HttpClient) { }

  //Connexion du front au back

  apiUrl = 'http://localhost:3000/formations';


  //récupérer toutes les formations
  getAllData(): Observable<any> {
    return this._http.get(`${this.apiUrl}`);
  }

  //créer une formation
  creerFormation(formation: any): Observable<any> {
    console.log(formation, 'createAPI=>');
    return this._http.post(`${this.apiUrl}`, formation)
  }

  //supprimer une formation
  supprimerFormation(id: any): Observable<any> {
    let ids = id;
    return this._http.delete(`${this.apiUrl}/${ids}`)
  }

  //updateFormation 
  updateData(data: any, id: any): Observable<any> {
    let ids = id;
    return this._http.put(`${this.apiUrl}/${ids}`, data);
  }

  //getSingleData
  getSingleData(id: any): Observable<any> {
    let ids = id;
    return this._http.get(`${this.apiUrl}/${ids}`)
  }

  // FORMATEUR

  apiUrlFormateurs = 'http://localhost:3000/formateurs';

  getAllDataFormateurs(): Observable<any> {
    return this._http.get(`${this.apiUrlFormateurs}`);
  }

  //Ajouter un formateur
  ajouterFormateurs(data: any): Observable<any> {

    return this._http.post(`${this.apiUrlFormateurs}`, data);

  }

  //Supprimer un formateur
  supprimerFormateurs(id: any): Observable<any> {
    let ids = id;
    return this._http.delete(`${this.apiUrlFormateurs}/${ids}`);
  }

  //Modifier un formateur
  modifierFormateurs(data: any, id: any): Observable<any> {
    let ids = id;
    return this._http.put(`${this.apiUrlFormateurs}/${ids}`, data);
  }

  getSingleDataFormateur(id: any): Observable<any> {
    let ids = id;
    return this._http.get(`${this.apiUrlFormateurs}/${ids}`)
  }
}
