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

  constructor() { }

  ngOnInit(){
    this.verificar();
  }

  verificar(){ 
    if(this.tipo === true){
      this.resultado = "Mestre de Quadra"
    }else{
      this.resultado = "Jogador"
    } 
  }

}
