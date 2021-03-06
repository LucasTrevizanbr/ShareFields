import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoQuadra } from 'src/app/model/InfoQuadra';
import { InfoQuadraService } from 'src/app/service/info-quadra.service';
import { AlertasService } from 'src/app/service/alertas.service';

@Component({
  selector: 'app-excluir-horario-quadra',
  templateUrl: './excluir-horario-quadra.component.html',
  styleUrls: ['./excluir-horario-quadra.component.css']
})
export class ExcluirHorarioQuadraComponent implements OnInit {

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

  excluirInfoQuadra(){
    this.infoQuadraService.deletarInfoQuadra(this.infoQuadra.id).subscribe(()=>{
      this.alerta.showAlertSuccess('Horário excluido com sucesso!');
      this.router.navigate(['/painel-controle-mq']);
    })
  }

}
