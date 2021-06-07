import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { UsuarioModule } from './usuario/usuario.module';
import { RaizModule } from './raiz/raiz.module';
import { QuadraModule } from './quadra/quadra.module';
import { InfoQuadraModule } from './info-quadra/info-quadra.module';




@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuarioModule,
    RaizModule,
    QuadraModule,
    InfoQuadraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
