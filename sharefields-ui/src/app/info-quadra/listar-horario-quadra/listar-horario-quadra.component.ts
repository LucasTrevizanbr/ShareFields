import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quadra } from 'src/app/model/Quadra';
import { AlertasService } from 'src/app/service/alertas.service';
import { QuadraService } from 'src/app/service/quadra.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-listar-horario-quadra',
  templateUrl: './listar-horario-quadra.component.html',
  styleUrls: ['./listar-horario-quadra.component.css']
})
export class ListarHorarioQuadraComponent implements OnInit {

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


  jogador():boolean{
    if(environment.disponibilizadorDeQuadra){
      return false
    }else{
      return true
    }
  }

}
