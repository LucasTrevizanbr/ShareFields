<<<<<<< HEAD

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavSuperiorComponent } from './nav-superior/nav-superior.component';
import { NavLateralComponent } from './nav-lateral/nav-lateral.component';
=======
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { FooterComponent } from './footer/footer.component';
import { NavSuperiorComponent } from './nav-superior/nav-superior.component';
import { NavLateralComponent } from './nav-lateral/nav-lateral.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { RouterModule } from '@angular/router';



>>>>>>> 02f77363f8616f3996068a6136f80824a0cb33c3



@NgModule({
  declarations: [
    FooterComponent,
    NavSuperiorComponent,
    NavLateralComponent,
<<<<<<< HEAD
  ],
  imports: [
    CommonModule
=======
    HomeComponent,
    SobreComponent
  ],
  imports: [
    CommonModule,
    RouterModule
>>>>>>> 02f77363f8616f3996068a6136f80824a0cb33c3
  ],
  exports:[
    FooterComponent,
    NavSuperiorComponent,
<<<<<<< HEAD
    NavLateralComponent
=======
    NavLateralComponent,
    HomeComponent,
    SobreComponent
>>>>>>> 02f77363f8616f3996068a6136f80824a0cb33c3
  ]
})
export class RaizModule { }
