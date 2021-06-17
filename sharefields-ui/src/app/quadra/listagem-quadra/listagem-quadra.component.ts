import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuadraService } from 'src/app/service/quadra.service';
import { Quadra } from 'src/app/model/Quadra';
import { AlertasService } from 'src/app/service/alertas.service';

@Component({
  selector: 'app-listagem-quadra',
  templateUrl: './listagem-quadra.component.html',
  styleUrls: ['./listagem-quadra.component.css']
})
export class ListagemQuadraComponent implements OnInit {

  quadra:Quadra = new Quadra();

  listaQuadra : Quadra[];

  nomeQuadra: string;
  modalidadeQuadra: string;
  cidadeQuadra: string;


  constructor(
    private router: Router,
    private quadraService: QuadraService,
    private alerta: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0);

    if(environment.token ==''){
      this.alerta.showAlertInfo('Sua seção expirou, faça login novamente!')
      this.router.navigate(['/logar'])
    };

    this.buscarTodasAsQuadras();
  }

  buscarTodasAsQuadras(){
     this.quadraService.buscarTodasAsQuadras(this.quadra).subscribe((resp: Quadra[])=>{
        this.listaQuadra = resp;
     })
  }

  acharPorNomeQuadra(){
    if(this.nomeQuadra == ''){
      this.buscarTodasAsQuadras();
    }else{
      this.quadraService.buscarQuadraPorNome(this.nomeQuadra).subscribe((resp: Quadra[])=>{
        this.listaQuadra = resp;
      })
    }  
  }

  acharPorNomeModalidade(){
    if(this.modalidadeQuadra == ''){
      this.buscarTodasAsQuadras();
    }else{
      this.quadraService.buscarQuadraPorModalidade(this.modalidadeQuadra).subscribe((resp: Quadra[])=>{
        this.listaQuadra = resp;
      })
    }
  }

  acharPorNomeCidade(){
    if(this.cidadeQuadra == ''){
      this.buscarTodasAsQuadras();
    }else{
      this.quadraService.buscarQuadraPorCidade(this.cidadeQuadra).subscribe((resp: Quadra[])=>{
        this.listaQuadra = resp;
      })
    }
  }

}
