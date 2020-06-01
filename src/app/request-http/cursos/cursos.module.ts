import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursosService } from './cursos.service';


@NgModule({
  declarations: [CursosListaComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CursosRoutingModule
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
