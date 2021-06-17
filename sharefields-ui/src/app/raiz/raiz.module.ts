import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavSuperiorComponent } from './nav-superior/nav-superior.component';
import { NavLateralComponent } from './nav-lateral/nav-lateral.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { AlertaComponent } from './alerta/alerta.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    FooterComponent,
    NavSuperiorComponent,
    NavLateralComponent,
    HomeComponent,
    SobreComponent,
    AlertaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ModalModule.forRoot()
  ],
  exports:[
    FooterComponent,
    NavSuperiorComponent,
    NavLateralComponent,
    HomeComponent,
    SobreComponent,
    AlertaComponent
  ]
})
export class RaizModule { }
