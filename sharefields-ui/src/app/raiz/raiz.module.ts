
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavSuperiorComponent } from './nav-superior/nav-superior.component';
import { NavLateralComponent } from './nav-lateral/nav-lateral.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavSuperiorComponent,
    NavLateralComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FooterComponent,
    NavSuperiorComponent,
    NavLateralComponent
  ]
})
export class RaizModule { }
