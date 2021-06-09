import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemQuadraComponent } from './quadra/listagem-quadra/listagem-quadra.component';
import { HomeComponent } from './raiz/home/home.component';
import { SobreComponent } from './raiz/sobre/sobre.component';
import { CadastroComponent } from './usuario/cadastro/cadastro.component';
import { LoginComponent } from './usuario/login/login.component';

const routes: Routes = [

  {path: '', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'cadastrar', component: CadastroComponent},
  {path:'logar', component: LoginComponent},
  {path:'sobre', component: SobreComponent},

  {path:'procurar-quadras',component:ListagemQuadraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
