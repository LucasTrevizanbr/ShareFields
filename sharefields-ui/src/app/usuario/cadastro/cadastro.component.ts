import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

import { Usuario } from 'src/app/model/Usuario';

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
    private router : Router
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
      alert('Sua senhas não são iguais!!'+ this.confirmeSenha)
      console.log(
        this.user.apelido,
        this.user.avatar,
        this.user.email,
        this.user.nome,
        this.user.senha,
      )
      
    } else {
      this.authService.cadastrar(this.user).subscribe((resp: Usuario)=>{
        this.user = resp
        this.router.navigate(['/logar'])
        alert('Usuário cadastrado com sucesso!')
      })

    }

  }

}
