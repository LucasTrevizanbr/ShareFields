import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment.prod';

import { InfoQuadra } from '../model/InfoQuadra';

@Injectable({
  providedIn: 'root'
})
export class InfoQuadraService {

  constructor(
    private http: HttpClient,
    private router : Router
  ) { }

  token ={
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  criarInfoQuadra(infoQuadra: InfoQuadra):Observable<InfoQuadra>{
    return this.http.post<InfoQuadra>('http://localhost:8080/api/v1/infoQuadra', infoQuadra, this.token)
  }

  procurarInfoQuadraPorId(id: number): Observable<InfoQuadra>{
    return this.http.get<InfoQuadra>(`http://localhost:8080/api/v1/infoQuadra/${id}`, this.token)
  }

  atualizarInfoQuadra(infoQuadra: InfoQuadra):Observable<InfoQuadra>{
    return this.http.put<InfoQuadra>('http://localhost:8080/api/v1/infoQuadra', infoQuadra, this.token)
  }

  deletarInfoQuadra(id: number){
    return this.http.delete(`http://localhost:8080/api/v1/infoQuadra/${id}`, this.token)
  }



}
