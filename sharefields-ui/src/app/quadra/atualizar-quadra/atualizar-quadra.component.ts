import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuadraService } from 'src/app/service/quadra.service';
import { Quadra } from 'src/app/model/Quadra';
import { AlertasService } from 'src/app/service/alertas.service';

@Component({
  selector: 'app-atualizar-quadra',
  templateUrl: './atualizar-quadra.component.html',
  styleUrls: ['./atualizar-quadra.component.css']
})
export class AtualizarQuadraComponent implements OnInit {

  quadra: Quadra = new Quadra();

  constructor(
    private router: Router,
    private quadraService: QuadraService,
    private route: ActivatedRoute,
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
    })
  }

  atualizarQuadra(){
    this.quadraService.atualizarQuadra(this.quadra).subscribe((resp: Quadra)=>{
      this.quadra = resp;
      this.alerta.showAlertSuccess("Quadra Atualizada com sucesso!");
      this.router.navigate(['/painel-controle-mq']);
    })
  }

  cancelar(){
    this.router.navigate(['/procurar-quadras'])
  }

}
