import { environment } from './../../../environments/environment.prod';

import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-over-view-user',
  templateUrl: './over-view-user.component.html',
  styleUrls: ['./over-view-user.component.css']
})
export class OverViewUserComponent implements OnInit {

  apelido:  String = environment.apelido
  avatar: string = environment.avatar
  tipo: boolean = environment.disponibilizadorDeQuadra
  resultado:string
  rotaPainelControle: string

  constructor() { }

  ngOnInit(){
    this.verificar();
    this.irParaPainelControle();
  }

  verificar(){ 
    if(this.tipo === true){
      this.resultado = "Mestre de Quadra"
    }else{
      this.resultado = "Jogador"
    } 
  }

  irParaPainelControle(){
    if(this.tipo === true){
      this.rotaPainelControle = "/painel-controle-mq"
    }else{
      this.rotaPainelControle = "/painel-contole-jogador"
    } 
  }
  

}
