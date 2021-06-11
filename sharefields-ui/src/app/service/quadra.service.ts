import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


import { Quadra } from '../model/Quadra';

@Injectable({
  providedIn: 'root'
})
export class QuadraService {

  

  constructor(
    private http: HttpClient,
    private router : Router
  ) { }

  token ={
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  cadastrarQuadra(quadra: Quadra): Observable<Quadra>{
    return this.http.post<Quadra>('http://localhost:8080/api/v1/usuario/logar', quadra, this.token)
  }
  
}
