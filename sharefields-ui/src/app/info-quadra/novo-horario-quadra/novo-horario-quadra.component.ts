import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quadra } from 'src/app/model/Quadra';
import { QuadraService } from 'src/app/service/quadra.service';
import { InfoQuadraService } from 'src/app/service/info-quadra.service';
import { InfoQuadra } from 'src/app/model/InfoQuadra';
import { AlertasService } from 'src/app/service/alertas.service';

@Component({
  selector: 'app-novo-horario-quadra',
  templateUrl: './novo-horario-quadra.component.html',
  styleUrls: ['./novo-horario-quadra.component.css']
})
export class NovoHorarioQuadraComponent implements OnInit {

  quadra: Quadra = new Quadra();

  infoQuadra: InfoQuadra = new InfoQuadra();

  constructor(
    private route: ActivatedRoute,
    private quadraService: QuadraService,
    private router: Router,
    private infoQuadraService: InfoQuadraService,
    private alerta: AlertasService
  ) { }

  ngOnInit(){
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

  criarInfoQuadra(){

    this.infoQuadra.quadra = this.quadra;

    this.infoQuadraService.criarInfoQuadra(this.infoQuadra).subscribe((resp: InfoQuadra)=>{
      this.infoQuadra = resp;
      this.alerta.showAlertSuccess('Novo Horário de quadra criado!')
      this.router.navigate(['/painel-controle-mq'])
    }, erro =>{
      console.log(`Erro cod: ${erro.status}`)
      if(erro.status===500){
       this.alerta.showAlertDanger("Preencha todos os campos antes de cadastrar");
      }
    })  
  }


}
