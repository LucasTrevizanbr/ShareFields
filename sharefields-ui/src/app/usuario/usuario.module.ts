import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CadastroComponent } from './cadastro/cadastro.component';
import { OverViewUserComponent } from './over-view-user/over-view-user.component';
import { LoginComponent } from './login/login.component';
import { RaizModule } from '../raiz/raiz.module';
import { PainelControleUsuarioMqComponent } from './painel-controle-usuario-mq/painel-controle-usuario-mq.component';
import { PainelControleUsuarioJogadorComponent } from './painel-controle-usuario-jogador/painel-controle-usuario-jogador.component';
import { EditarContaComponent } from './editar-conta/editar-conta.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    CadastroComponent,
    OverViewUserComponent,
    LoginComponent,
    PainelControleUsuarioMqComponent,
    PainelControleUsuarioJogadorComponent,
    EditarContaComponent
  ],
  imports: [
    CommonModule,
    RaizModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    CadastroComponent,
    OverViewUserComponent,
    LoginComponent,
    PainelControleUsuarioMqComponent,
    PainelControleUsuarioJogadorComponent,
    EditarContaComponent
  ]
})
export class UsuarioModule { }
