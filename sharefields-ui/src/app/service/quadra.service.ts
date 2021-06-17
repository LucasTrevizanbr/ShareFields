import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from './../../environments/environment.prod';


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
    return this.http.post<Quadra>('http://localhost:8080/api/v1/quadra', quadra, this.token)
  }

  atualizarQuadra(quadra: Quadra):Observable<Quadra>{
    return this.http.put<Quadra>(`http://localhost:8080/api/v1/quadra`, quadra, this.token)
  }

  deletarQuadra(id: number){
    return this.http.delete(`http://localhost:8080/api/v1/quadra/${id}`, this.token)
  }

  buscarTodasAsQuadras(quadra: Quadra): Observable<Quadra[]>{
    return this.http.get<Quadra[]>('http://localhost:8080/api/v1/quadra', this.token)
  }

  buscarQuadraPorId(id: number):Observable<Quadra>{
    return this.http.get<Quadra>(`http://localhost:8080/api/v1/quadra/${id}`, this.token)
  }

  buscarQuadraPorNome(nome: string):Observable<Quadra[]>{
    return this.http.get<Quadra[]>(`http://localhost:8080/api/v1/quadra/nome/${nome}`, this.token)
  }

  buscarQuadraPorModalidade(modalidade: string):Observable<Quadra[]>{
    return this.http.get<Quadra[]>(`http://localhost:8080/api/v1/quadra/modalidade/${modalidade}`, this.token)
  }

  buscarQuadraPorCidade(cidade: string):Observable<Quadra[]>{
    return this.http.get<Quadra[]>(`http://localhost:8080/api/v1/quadra/cidade/${cidade}`, this.token)
  }
  
}
