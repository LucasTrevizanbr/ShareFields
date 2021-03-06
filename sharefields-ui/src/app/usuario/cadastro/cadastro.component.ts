import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: Usuario = new Usuario()
  confirmeSenha: string;
  tipoUsuario: boolean;

  constructor(
    private authService: AuthService,
    private router : Router,
    private alerta: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  marcarRadio(event: any){
    this.tipoUsuario = event.target.value
  }

  confirmarSenha(event: any){
    this.confirmeSenha = event.target.value

  }

  cadastrar(){
    this.user.disponibilizadorDeQuadra = this.tipoUsuario;

    if(this.user.senha !== this.confirmeSenha){
      this.alerta.showAlertInfo('Sua senhas não são iguais!!')
    } else {
      this.authService.cadastrar(this.user).subscribe((resp: Usuario)=>{
        this.user = resp
        this.router.navigate(['/logar'])
        this.alerta.showAlertSuccess('Usuário cadastrado com sucesso!')
      }, erro =>{
        console.log(`Erro cod: ${erro.status}`)
        if(erro.status===500)
        this.alerta.showAlertDanger("Preencha todos os campos antes de cadastrar");
      })
    }
  }


}
