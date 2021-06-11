import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroQuadraComponent } from './quadra/cadastro-quadra/cadastro-quadra.component';
import { ListagemQuadraComponent } from './quadra/listagem-quadra/listagem-quadra.component';
import { HomeComponent } from './raiz/home/home.component';
import { SobreComponent } from './raiz/sobre/sobre.component';
import { CadastroComponent } from './usuario/cadastro/cadastro.component';
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

  {path:'painel-controle-mq', component: PainelControleUsuarioMqComponent},
  {path:'painel-contole-jogador', component: PainelControleUsuarioJogadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
