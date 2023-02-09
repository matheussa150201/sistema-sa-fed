import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class ContanierloginService {
 
  apiUrl = 'http://localhost:8080/login/entrar';

  httpOpitions = {
    headers:new HttpHeaders({
      'content-type' : 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  public getLogin(): Observable<Login> {
    return this.httpClient.get<Login>(this.apiUrl);
}
}