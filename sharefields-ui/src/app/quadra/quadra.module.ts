import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListagemQuadraComponent } from './listagem-quadra/listagem-quadra.component';
import { UsuarioModule } from '../usuario/usuario.module';
import { RaizModule } from '../raiz/raiz.module';
import { UnidadeQuadraComponent } from './unidade-quadra/unidade-quadra.component';
import { CadastroQuadraComponent } from './cadastro-quadra/cadastro-quadra.component';
import { AtualizarQuadraComponent } from './atualizar-quadra/atualizar-quadra.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    ListagemQuadraComponent,
    UnidadeQuadraComponent,
    CadastroQuadraComponent,
    AtualizarQuadraComponent
  ],
  imports: [
    CommonModule,
    UsuarioModule,
    RaizModule,
    FormsModule
   
  ],
  exports:[
    ListagemQuadraComponent,
    UnidadeQuadraComponent,
    CadastroQuadraComponent,
    AtualizarQuadraComponent
  ]
})
export class QuadraModule { }
