import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuadraService } from 'src/app/service/quadra.service';

import { environment } from './../../../environments/environment.prod';

import { Quadra } from 'src/app/model/Quadra';
import { Usuario } from './../../model/Usuario';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-cadastro-quadra',
  templateUrl: './cadastro-quadra.component.html',
  styleUrls: ['./cadastro-quadra.component.css']
})
export class CadastroQuadraComponent implements OnInit {

  quadra: Quadra = new Quadra();

  usuario : Usuario = new Usuario();
  idUsuario = environment.id;

  constructor(
    private router: Router,
    private quadraService : QuadraService,
    private authService : AuthService
  ) { }

  ngOnInit(){
    window.scroll(0,0);

    if(environment.token ==''){
      alert('Sua seção expirou, faça login novamente!')
      this.router.navigate(['/logar'])
    };
  }

  usuarioDonoQuadra(){
    this.authService.buscarUsuarioPorId(this.idUsuario).subscribe((resp: Usuario)=>{
      this.usuario = resp
    })
  }

  cadastrarQuadra(){

    this.usuario.id = this.idUsuario
    this.quadra.proprietarioQuadra = this.usuario

    if(this.checarCampos()){
        alert('Preencha os campos necessários antes de cadastrar a quadra!!')
    }else{
      this.quadraService.cadastrarQuadra(this.quadra).subscribe((resp : Quadra)=>{
        this.quadra = resp;
        alert("Quadra cadastrada com sucesso!")
        this.quadra = new Quadra()
      })
    }  
  }

  cancelar(){
    this.router.navigate(['/procurar-quadras'])
  }

  checarCampos(): boolean{
    if(this.quadra.imagem === '' || this.quadra.nome === '' || this.quadra.qtdJogadoresMax === null || this.quadra.descricao === '' || this.quadra.modalidade === '' || this.quadra.cep === '' || this.quadra.rua === '' || this.quadra.numero === null || this.quadra.uf === '' || this.quadra.cidade === '' || this.quadra.bairro === ''){
      return true;
    }else{
      return false
    }
  }

}
