import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
=======
import { HttpClientModule } from '@angular/common/http';

>>>>>>> 02f77363f8616f3996068a6136f80824a0cb33c3

import { AppComponent } from './app.component';

import { UsuarioModule } from './usuario/usuario.module';
import { RaizModule } from './raiz/raiz.module';
<<<<<<< HEAD
import { ListagemQuadraComponent } from './listagem-quadra/listagem-quadra.component';

@NgModule({
  declarations: [
    AppComponent,
    ListagemQuadraComponent,
=======
import { QuadraModule } from './quadra/quadra.module';
import { InfoQuadraModule } from './info-quadra/info-quadra.module';





@NgModule({
  declarations: [
    AppComponent, 
>>>>>>> 02f77363f8616f3996068a6136f80824a0cb33c3
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuarioModule,
<<<<<<< HEAD
    RaizModule
=======
    RaizModule,
    QuadraModule,
    InfoQuadraModule,
    HttpClientModule,
>>>>>>> 02f77363f8616f3996068a6136f80824a0cb33c3
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
