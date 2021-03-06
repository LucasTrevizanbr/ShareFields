import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ParticiparQuadraComponent } from './participar-quadra/participar-quadra.component';
import { UsuarioModule } from '../usuario/usuario.module';
import { RaizModule } from '../raiz/raiz.module';
import { NovoHorarioQuadraComponent } from './novo-horario-quadra/novo-horario-quadra.component';
import { AtualizarHorarioQuadraComponent } from './atualizar-horario-quadra/atualizar-horario-quadra.component';
import { ExcluirHorarioQuadraComponent } from './excluir-horario-quadra/excluir-horario-quadra.component';
import { SairQuadraComponent } from './sair-quadra/sair-quadra.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListarHorarioQuadraComponent } from './listar-horario-quadra/listar-horario-quadra.component';
import { UnidadeInfoQuadraComponent } from './unidade-info-quadra/unidade-info-quadra.component';




@NgModule({
  declarations: [
    ParticiparQuadraComponent,
    NovoHorarioQuadraComponent,
    AtualizarHorarioQuadraComponent,
    ExcluirHorarioQuadraComponent,
    SairQuadraComponent,
    ListarHorarioQuadraComponent,
    UnidadeInfoQuadraComponent
  ],
  imports: [
    CommonModule,
    UsuarioModule,
    RaizModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    ParticiparQuadraComponent,
    NovoHorarioQuadraComponent,
    AtualizarHorarioQuadraComponent,
    ExcluirHorarioQuadraComponent,
    SairQuadraComponent,
    ListarHorarioQuadraComponent,
    UnidadeInfoQuadraComponent
  ]
})
export class InfoQuadraModule { }
