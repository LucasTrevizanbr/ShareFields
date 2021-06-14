import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-painel-controle-usuario-mq',
  templateUrl: './painel-controle-usuario-mq.component.html',
  styleUrls: ['./painel-controle-usuario-mq.component.css']
})
export class PainelControleUsuarioMqComponent implements OnInit {

  usuario : Usuario = new Usuario();
  
  

  constructor(
    private router: Router,
    private authService: AuthService 
  ) { }

  ngOnInit(){
    window.scroll(0,0);

    if(environment.token ==''){
      alert('Sua seção expirou, faça login novamente!')
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
