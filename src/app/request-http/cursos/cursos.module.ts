import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursosService } from './cursos.service';
import { SharedModule } from './../shared/shared.module';
import { CursosFormComponent } from './cursos-form/cursos-form.component';


@NgModule({
  declarations: [CursosListaComponent, CursosFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CursosRoutingModule,
    SharedModule,
    ModalModule,
    ReactiveFormsModule
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
