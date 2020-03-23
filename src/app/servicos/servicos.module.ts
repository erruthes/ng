import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos/cursos.component';
import { CursosService } from './cursos.service';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { ReceberCursoCriadoComponent } from './receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [
    CursosComponent,
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
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
