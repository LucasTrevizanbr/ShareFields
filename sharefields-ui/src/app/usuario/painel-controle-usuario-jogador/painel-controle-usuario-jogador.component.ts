import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoQuadra } from 'src/app/model/InfoQuadra';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-painel-controle-usuario-jogador',
  templateUrl: './painel-controle-usuario-jogador.component.html',
  styleUrls: ['./painel-controle-usuario-jogador.component.css']
})
export class PainelControleUsuarioJogadorComponent implements OnInit {

  usuario: Usuario = new Usuario();
  

  constructor(
    private router: Router,
    private authService: AuthService,

  ) { }

  ngOnInit(){
    window.scroll(0,0);

    if(environment.token ==''){
      alert('Sua seção expirou, faça login novamente!')
      this.router.navigate(['/logar'])
    };

    this.usuarioJogadorLogado();
  }
  
  usuarioJogadorLogado(){
    this.authService.buscarUsuarioPorId(environment.id).subscribe((resp: Usuario)=>{
      this.usuario = resp
    })
  }

}
