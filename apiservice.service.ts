import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  //Connexion front / back

  apiUrl = 'http://localhost:3000/formateurs';

  //Récupération de toutes les données

  getAllData():Observable<any>
  {

    return this._http.get(`${this.apiUrl}`);

  }


  //Ajouter un formateur
  ajouterFormateurs(data:any):Observable<any>
  {
    
    return this._http.post(`${this.apiUrl}`, data);

  }

  //Supprimer un formateur
  supprimerFormateurs(id:any):Observable<any>
  {
    let ids = id;
    return this._http.delete(`${this.apiUrl}/${ids}`);
}

  //Modifier un formateur
  modifierFormateurs(data:any, id:any):Observable<any>

  {
    let ids =id;
    return this._http.put(`${this.apiUrl}/${ids}`, data);
  }

  //Obtenir un single data
  getSingleData(id:any):Observable<any>
  {
    let ids =id;
    return this._http.get(`${this.apiUrl}/${ids}`);

  }

}





