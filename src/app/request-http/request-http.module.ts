import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestHttpComponent } from './request-http.component';
import { RequestHttpRoutingModule } from './request-http-routing.module';
import { CursosModule } from './cursos/cursos.module';



@NgModule({
  declarations: [RequestHttpComponent],
  imports: [
    CommonModule,
    RequestHttpRoutingModule,
    CursosModule
  ],
  exports: [
    RequestHttpComponent
  ]
})
export class RequestHttpModule { }
