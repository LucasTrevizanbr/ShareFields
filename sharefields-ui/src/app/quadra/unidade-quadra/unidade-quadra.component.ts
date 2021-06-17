import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuadraService } from 'src/app/service/quadra.service';
import { Quadra } from 'src/app/model/Quadra';
import { AlertasService } from 'src/app/service/alertas.service';

@Component({
  selector: 'app-unidade-quadra',
  templateUrl: './unidade-quadra.component.html',
  styleUrls: ['./unidade-quadra.component.css']
})
export class UnidadeQuadraComponent implements OnInit {

  quadra: Quadra = new Quadra();
  qtdInfoQuadra:number
  

  constructor(
    private route: ActivatedRoute,
    private quadraService: QuadraService,
    private router: Router,
    private alerta: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0);

    if(environment.token ==''){
      this.alerta.showAlertInfo('Sua seção expirou, faça login novamente!')
      this.router.navigate(['/logar'])
    };

    let idRotaAtiva = this.route.snapshot.params['id'];
    this.acharQuadraPorID(idRotaAtiva);
  }

  acharQuadraPorID(id: number){
    this.quadraService.buscarQuadraPorId(id).subscribe((resp: Quadra)=>{
      this.quadra = resp;
      this.qtdInfoQuadra = this.quadra.infoQuadra.length;
    })
  }

  jogador():boolean{
    if(environment.disponibilizadorDeQuadra){
      return false
    }else{
      return true
    }
  }

}
