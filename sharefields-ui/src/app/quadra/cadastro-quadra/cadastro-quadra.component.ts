import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quadra } from 'src/app/model/Quadra';
import { QuadraService } from 'src/app/service/quadra.service';

import { environment } from './../../../environments/environment.prod';

@Component({
  selector: 'app-cadastro-quadra',
  templateUrl: './cadastro-quadra.component.html',
  styleUrls: ['./cadastro-quadra.component.css']
})
export class CadastroQuadraComponent implements OnInit {

  quadra: Quadra = new Quadra();

  constructor(
    private router: Router,
    private quadraService : QuadraService
  ) { }

  ngOnInit(){
    window.scroll(0,0);

    if(environment.token ==''){
      alert('Sua seção expirou, faça login novamente!')
      this.router.navigate(['/logar'])
    };
  }

  cadastrarQuadra(){
    this.quadraService.cadastrarQuadra(this.quadra).subscribe((resp : Quadra)=>{
      this.quadra = resp;
      alert("Quadra cadastrada com sucesso!")
      this.quadra = new Quadra()
    })
  }

  cancelar(){
    this.router.navigate(['/procurar-quadras'])
  }

}
