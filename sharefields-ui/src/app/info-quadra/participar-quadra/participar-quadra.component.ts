import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoQuadra } from 'src/app/model/InfoQuadra';
import { AlertasService } from 'src/app/service/alertas.service';
import { InfoQuadraService } from 'src/app/service/info-quadra.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-participar-quadra',
  templateUrl: './participar-quadra.component.html',
  styleUrls: ['./participar-quadra.component.css']
})
export class ParticiparQuadraComponent implements OnInit {
  
  infoQuadra: InfoQuadra = new InfoQuadra();
  qtdJogadoresNaInfo: number;
  qtdJogadoresMax: number;

  constructor(
    private route: ActivatedRoute,
    private infoQuadraService: InfoQuadraService,
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
      this.infoQuadra = resp;
      this.qtdJogadoresMax = this.infoQuadra.quadra.qtdJogadoresMax;
      this.qtdJogadoresNaInfo = this.infoQuadra.jogadores.length;
    })
  }

  participarDaQuadra(){
    this.infoQuadraService.inserirUsuarioNaInfoQuadra(this.infoQuadra.id, environment.id).subscribe((resp: InfoQuadra)=>{
      this.infoQuadra = resp;
      this.alerta.showAlertSuccess('Você esta participando dessa quadra!');
    });
  }

}
