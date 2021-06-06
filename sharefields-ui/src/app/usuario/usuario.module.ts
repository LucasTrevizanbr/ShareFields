import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { OverViewUserComponent } from './over-view-user/over-view-user.component';
import { LoginComponent } from './login/login.component';
import { RaizModule } from '../raiz/raiz.module';
import { PainelControleUsuarioMqComponent } from './painel-controle-usuario-mq/painel-controle-usuario-mq.component';



@NgModule({
  declarations: [
    CadastroComponent,
    OverViewUserComponent,
    LoginComponent,
    PainelControleUsuarioMqComponent
  ],
  imports: [
    CommonModule,
    RaizModule
  ],
  exports:[
    CadastroComponent,
    OverViewUserComponent,
    LoginComponent,
    PainelControleUsuarioMqComponent
  ]
})
export class UsuarioModule { }
