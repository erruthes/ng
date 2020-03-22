import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos/cursos.component';



@NgModule({
  declarations: [CursosComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent
  ]
})
export class ServicosModule { }
