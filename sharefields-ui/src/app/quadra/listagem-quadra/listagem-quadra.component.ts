import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuadraService } from 'src/app/service/quadra.service';
import { Quadra } from 'src/app/model/Quadra';

@Component({
  selector: 'app-listagem-quadra',
  templateUrl: './listagem-quadra.component.html',
  styleUrls: ['./listagem-quadra.component.css']
})
export class ListagemQuadraComponent implements OnInit {

  quadra:Quadra = new Quadra();

  listaQuadra : Quadra[];

  constructor(
    private router: Router,
    private quadraService: QuadraService
  ) { }

  ngOnInit(){
    window.scroll(0,0);

    if(environment.token ==''){
      alert('Sua seção expirou, faça login novamente!')
      this.router.navigate(['/logar'])
    };

    this.buscarTodasAsQuadras();
  }

  buscarTodasAsQuadras(){
     this.quadraService.buscarTodasAsQuadras(this.quadra).subscribe((resp: Quadra[])=>{
        this.listaQuadra = resp;
     })
  }

}
