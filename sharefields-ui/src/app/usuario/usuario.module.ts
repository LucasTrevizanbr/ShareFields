import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { OverViewUserComponent } from './over-view-user/over-view-user.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    CadastroComponent,
    OverViewUserComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CadastroComponent,
    OverViewUserComponent,
    LoginComponent
  ]
})
export class UsuarioModule { }
