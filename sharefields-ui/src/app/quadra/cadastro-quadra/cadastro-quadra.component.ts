import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuadraService } from 'src/app/service/quadra.service';

import { environment } from './../../../environments/environment.prod';

import { Quadra } from 'src/app/model/Quadra';
import { Usuario } from './../../model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { AlertasService } from 'src/app/service/alertas.service';

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
    private authService : AuthService,
    private alerta: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0);

    if(environment.token ==''){
      this.alerta.showAlertInfo('Sua seção expirou, faça login novamente!')
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
 
    this.quadraService.cadastrarQuadra(this.quadra).subscribe((resp : Quadra)=>{
      this.quadra = resp;
      this.alerta.showAlertSuccess("Quadra cadastrada com sucesso!")
      this.quadra = new Quadra()
    }, erro =>{
      console.log(`Erro cod: ${erro.status}`)
      if(erro.status===500){
       this.alerta.showAlertDanger("Preencha todos os campos antes de cadastrar");
      }
    })      
  }

  cancelar(){
    this.router.navigate(['/procurar-quadras'])
  }

}
