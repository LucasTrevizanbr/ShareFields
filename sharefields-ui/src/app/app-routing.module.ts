import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtualizarHorarioQuadraComponent } from './info-quadra/atualizar-horario-quadra/atualizar-horario-quadra.component';
import { ExcluirHorarioQuadraComponent } from './info-quadra/excluir-horario-quadra/excluir-horario-quadra.component';
import { ListarHorarioQuadraComponent } from './info-quadra/listar-horario-quadra/listar-horario-quadra.component';
import { NovoHorarioQuadraComponent } from './info-quadra/novo-horario-quadra/novo-horario-quadra.component';
import { ParticiparQuadraComponent } from './info-quadra/participar-quadra/participar-quadra.component';
import { SairQuadraComponent } from './info-quadra/sair-quadra/sair-quadra.component';
import { UnidadeInfoQuadraComponent } from './info-quadra/unidade-info-quadra/unidade-info-quadra.component';
import { AtualizarQuadraComponent } from './quadra/atualizar-quadra/atualizar-quadra.component';


import { CadastroQuadraComponent } from './quadra/cadastro-quadra/cadastro-quadra.component';
import { ExcluirQuadraComponent } from './quadra/excluir-quadra/excluir-quadra.component';
import { ListagemQuadraComponent } from './quadra/listagem-quadra/listagem-quadra.component';
import { UnidadeQuadraComponent } from './quadra/unidade-quadra/unidade-quadra.component';
import { HomeComponent } from './raiz/home/home.component';
import { SobreComponent } from './raiz/sobre/sobre.component';
import { CadastroComponent } from './usuario/cadastro/cadastro.component';
import { EditarContaComponent } from './usuario/editar-conta/editar-conta.component';
import { LoginComponent } from './usuario/login/login.component';
import { PainelControleUsuarioJogadorComponent } from './usuario/painel-controle-usuario-jogador/painel-controle-usuario-jogador.component';
import { PainelControleUsuarioMqComponent } from './usuario/painel-controle-usuario-mq/painel-controle-usuario-mq.component';

const routes: Routes = [

  {path: '', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'cadastrar', component: CadastroComponent},
  {path:'logar', component: LoginComponent},
  {path:'sobre', component: SobreComponent},

  {path:'procurar-quadras',component:ListagemQuadraComponent},
  {path:'cadastrar-quadra', component:CadastroQuadraComponent},
  {path:'editar-quadra/:id', component: AtualizarQuadraComponent},
  {path:'excluir-quadra/:id', component: ExcluirQuadraComponent},
  {path:'detalhe-quadra/:id', component: UnidadeQuadraComponent},

  {path:'editar-horario/:id', component: NovoHorarioQuadraComponent},
  {path:'excluir-horario/:id', component: ExcluirHorarioQuadraComponent},
  {path:'atualizar-horario/:id', component: AtualizarHorarioQuadraComponent},
  {path:'detalhe-infoQuadra/:id', component: ParticiparQuadraComponent},
  {path:'todos-horarios-quadra/:id', component:ListarHorarioQuadraComponent},
  {path:'sair-info-quadra/:id', component: SairQuadraComponent},
  {path:'detalhe-infoQuadra-visualizar/:id', component: UnidadeInfoQuadraComponent},

  {path:'painel-controle-mq', component: PainelControleUsuarioMqComponent},
  {path:'painel-contole-jogador', component: PainelControleUsuarioJogadorComponent},
  {path:'editar-usuario', component: EditarContaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
