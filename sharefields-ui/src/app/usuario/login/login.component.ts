import { environment } from './../../../environments/environment.prod';
import { UserLogin } from './../../model/UserLogin';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/service/alertas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private authService : AuthService,
    private router : Router,
    private alerta: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  entrar(){
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin)=>{
      this.userLogin = resp;

      environment.apelido = this.userLogin.apelido;
      environment.token = this.userLogin.token;
      environment.nome = this.userLogin.nome;
      environment.avatar = this.userLogin.avatar;
      environment.id = this.userLogin.id;
      environment.disponibilizadorDeQuadra = this.userLogin.disponibilizadorDeQuadra;
      this.router.navigate(['/procurar-quadras']);
      
    }, erro => {
      if(erro.status == 500){
        this.alerta.showAlertDanger('Usuário ou senha estão incorretos!');
      }
    }
    )
  }

}


