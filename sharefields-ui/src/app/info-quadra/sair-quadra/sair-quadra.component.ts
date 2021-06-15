import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { InfoQuadra } from 'src/app/model/InfoQuadra';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { InfoQuadraService } from 'src/app/service/info-quadra.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-sair-quadra',
  templateUrl: './sair-quadra.component.html',
  styleUrls: ['./sair-quadra.component.css']
})
export class SairQuadraComponent implements OnInit {

  usuario: Usuario = new Usuario();

  infoQuadra: InfoQuadra = new InfoQuadra();

  constructor(
    private route: ActivatedRoute,
    private infoQuadraService: InfoQuadraService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(){
    window.scroll(0,0);

    if(environment.token ==''){
      alert('Sua seção expirou, faça login novamente!')
      this.router.navigate(['/logar'])
    };

    let idRotaAtiva = this.route.snapshot.params['id'];
    this.acharInfoQuadraPorID(idRotaAtiva);
    this.acharUsuarioPorID();
  }

  acharInfoQuadraPorID(id: number){
    this.infoQuadraService.procurarInfoQuadraPorId(id).subscribe((resp: InfoQuadra)=>{
      this.infoQuadra = resp
    })
  }

  acharUsuarioPorID(){
    this.authService.buscarUsuarioPorId(environment.id).subscribe((resp: Usuario)=>{
      this.usuario = resp;
    })
  }

  sairDaInfoQuadra(){
    this.infoQuadraService.removerUsuarioDaInfoQuadra(this.infoQuadra.id, this.usuario.id).subscribe((resp: InfoQuadra)=>{
      this.infoQuadra = resp;
      alert('Você saiu do horario de quadra!');
      this.router.navigate(['/painel-controle-jogador']);
    })
  }

}
