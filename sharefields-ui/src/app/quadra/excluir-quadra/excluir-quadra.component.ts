import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuadraService } from 'src/app/service/quadra.service';
import { Quadra } from 'src/app/model/Quadra';
import { AlertasService } from 'src/app/service/alertas.service';

@Component({
  selector: 'app-excluir-quadra',
  templateUrl: './excluir-quadra.component.html',
  styleUrls: ['./excluir-quadra.component.css']
})
export class ExcluirQuadraComponent implements OnInit {

  quadra: Quadra = new Quadra();

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
    })
  }

  excluirQuadra(){
    this.quadraService.deletarQuadra(this.quadra.id).subscribe(()=>{
      this.alerta.showAlertSuccess('Quadra excluida com sucesso!');
      this.router.navigate(['/painel-controle-mq']);
    })
  }

}
