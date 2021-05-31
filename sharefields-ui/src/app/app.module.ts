import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './usuario/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { CadastroComponent } from './usuario/cadastro/cadastro.component';
import { OverViewUserComponent } from './usuario/over-view-user/over-view-user.component';
import { NavLateralComponent } from './nav-lateral/nav-lateral.component';
import { NavSuperiorComponent } from './nav-superior/nav-superior.component';
import { UsuarioModule } from './usuario/usuario.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavLateralComponent,
    NavSuperiorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
