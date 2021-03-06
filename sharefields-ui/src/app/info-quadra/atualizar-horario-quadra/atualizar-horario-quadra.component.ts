import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoQuadraService } from 'src/app/service/info-quadra.service';


import { InfoQuadra } from 'src/app/model/InfoQuadra';
import { AlertasService } from 'src/app/service/alertas.service';



@Component({
  selector: 'app-atualizar-horario-quadra',
  templateUrl: './atualizar-horario-quadra.component.html',
  styleUrls: ['./atualizar-horario-quadra.component.css']
})
export class AtualizarHorarioQuadraComponent implements OnInit {

  infoQuadra: InfoQuadra = new InfoQuadra();


  constructor(
    private route: ActivatedRoute,
    private infoQuadraService: InfoQuadraService ,
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
    this.acharInfoQuadraPorID(idRotaAtiva);
  }

  acharInfoQuadraPorID(id: number){
    this.infoQuadraService.procurarInfoQuadraPorId(id).subscribe((resp: InfoQuadra)=>{
      this.infoQuadra = resp
    })
  }

  atualizarQuadra(){
    this.infoQuadraService.atualizarInfoQuadra(this.infoQuadra).subscribe((resp: InfoQuadra)=>{
      this.infoQuadra = resp;
      this.alerta.showAlertSuccess('Horário Atualizado com sucesso');
      this.infoQuadra = new InfoQuadra();
      this.router.navigate(['/painel-controle-mq'])
    })
  }

}
