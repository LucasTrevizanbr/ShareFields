import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { FooterComponent } from './footer/footer.component';
import { NavSuperiorComponent } from './nav-superior/nav-superior.component';
import { NavLateralComponent } from './nav-lateral/nav-lateral.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { RouterModule } from '@angular/router';






@NgModule({
  declarations: [
    FooterComponent,
    NavSuperiorComponent,
    NavLateralComponent,
    HomeComponent,
    SobreComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    FooterComponent,
    NavSuperiorComponent,
    NavLateralComponent,
    HomeComponent,
    SobreComponent
  ]
})
export class RaizModule { }
