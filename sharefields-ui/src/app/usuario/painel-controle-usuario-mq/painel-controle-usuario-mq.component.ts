import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { Quadra } from 'src/app/model/Quadra';

@Component({
  selector: 'app-painel-controle-usuario-mq',
  templateUrl: './painel-controle-usuario-mq.component.html',
  styleUrls: ['./painel-controle-usuario-mq.component.css']
})
export class PainelControleUsuarioMqComponent implements OnInit {

  usuario : Usuario = new Usuario();

  nomeQuadra: string;
  listaQuadra: Quadra[];

  constructor(
    private router: Router,
    private authService: AuthService,
    private alerta: AlertasService,
  ) { }

  ngOnInit(){
    window.scroll(0,0);

    if(environment.token ==''){
      this.alerta.showAlertInfo('Sua seção expirou, faça login novamente!')
      this.router.navigate(['/logar'])
    };

    this.usuarioDonoQuadra();
  }

  usuarioDonoQuadra(){
    this.authService.buscarUsuarioPorId(environment.id).subscribe((resp: Usuario)=>{
      this.usuario = resp
    })
  }

}
