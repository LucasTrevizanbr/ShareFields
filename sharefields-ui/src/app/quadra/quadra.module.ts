import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListagemQuadraComponent } from './listagem-quadra/listagem-quadra.component';
import { UsuarioModule } from '../usuario/usuario.module';
import { RaizModule } from '../raiz/raiz.module';
import { UnidadeQuadraComponent } from './unidade-quadra/unidade-quadra.component';
import { CadastroQuadraComponent } from './cadastro-quadra/cadastro-quadra.component';




@NgModule({
  declarations: [
    ListagemQuadraComponent,
    UnidadeQuadraComponent,
    CadastroQuadraComponent
  ],
  imports: [
    CommonModule,
    UsuarioModule,
    RaizModule
  ],
  exports:[
    ListagemQuadraComponent,
    UnidadeQuadraComponent,
    CadastroQuadraComponent
  ]
})
export class QuadraModule { }
