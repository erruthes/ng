import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursosService } from './cursos.service';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [CursosListaComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CursosRoutingModule,
    SharedModule,
    ModalModule
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
