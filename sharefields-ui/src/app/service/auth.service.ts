import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';


import { UserLogin } from './../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  logar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/api/v1/usuario/logar', userLogin)
  }

  cadastrar(user: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8080/api/v1/usuario/cadastrar', user)
  }
  
}