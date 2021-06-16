import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-editar-conta',
  templateUrl: './editar-conta.component.html',
  styleUrls: ['./editar-conta.component.css']
})
export class EditarContaComponent implements OnInit {

  user: Usuario = new Usuario();
  confirmeSenha: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0);

    if(environment.token ==''){
      alert('Sua seção expirou, faça login novamente!')
      this.router.navigate(['/logar'])
    };

    this.acharUsuarioPorId();
  }

  confirmarSenha(event: any){
    this.confirmeSenha = event.target.value
  }

  acharUsuarioPorId(){
    this.authService.buscarUsuarioPorId(environment.id).subscribe((resp: Usuario)=>{
      this.user = resp;
    })
  }

  atualizar(){
    this.user.disponibilizadorDeQuadra = environment.disponibilizadorDeQuadra;

    if(this.user.senha !== this.confirmeSenha){
      alert('Sua senhas não são iguais!!')

    } else {
      this.authService.cadastrar(this.user).subscribe((resp: Usuario)=>{
        this.user = resp;
        alert('Usuário atualizado com sucesso!, faça login novamente');
        environment.apelido = '';
        environment.avatar = '';
        environment.id = 0;
        environment.disponibilizadorDeQuadra = false;
        environment.token = '';
        environment.nome = '';
        this.router.navigate(['/logar']);
        
      })
    }

  }

}
