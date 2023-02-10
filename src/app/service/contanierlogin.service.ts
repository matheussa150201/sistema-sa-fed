import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {enviroment} from "../../enviroments/enviroment";

@Injectable({
  providedIn: 'root'
})
export class ContanierloginService {

  private apiUrl = `${enviroment.REST_URL}/login`;

  httpOpitions = {
    headers:new HttpHeaders({
      'content-type' : 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  public getLogin(email : string, senha : string): Observable<boolean> {
    const params : any = {
      email : email,
      senha : senha
    };
    return this.httpClient.get<boolean>(`${this.apiUrl}/entrar`,
      {... this.httpOpitions, params});
}
}
