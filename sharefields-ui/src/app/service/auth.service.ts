import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';


import { UserLogin } from './../model/UserLogin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router : Router
  ) { }

  logar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/api/v1/usuario/logar', userLogin)
  }

  cadastrar(user: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8080/api/v1/usuario/cadastrar', user)
  }

  buscarUsuarioPorId(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`http://localhost:8080/api/v1/usuario/${id}`)
  }

  logado(){
    let logado = false;
    if(environment.token != ''){
      logado = true
    }
    return logado
  }

  sair(){
    this.router.navigate(['/logar']); 
    environment.apelido = '';
    environment.avatar = '';
    environment.id = 0;
    environment.disponibilizadorDeQuadra = false;
    environment.token = '';
    environment.nome = '';
  }
  
}
