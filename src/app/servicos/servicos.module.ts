import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos/cursos.component';
import { CursosService } from './cursos.service';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';

@NgModule({
  declarations: [CursosComponent, CriarCursoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent,
    CriarCursoComponent
  ],
  providers: [
    CursosService
  ]
})
export class ServicosModule { }
