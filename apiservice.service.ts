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

}
