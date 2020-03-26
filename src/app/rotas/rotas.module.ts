import { routing } from './../aap.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    routing
  ],
  exports: [
    RotasComponent
  ]
})
export class RotasModule { }
