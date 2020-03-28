import { routing } from './../aap.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { RotasComponent } from './rotas.component';



@NgModule({
  declarations: [
    RotasComponent,
    HomeComponent,
    LoginComponent,
    CursosComponent
  ],
  imports: [
    CommonModule,
    routing,

    MatMenuModule,
    MatIconModule,
    MatSliderModule,
    MatToolbarModule,
  ],
  exports: [
    RotasComponent
  ]
})
export class RotasModule { }
