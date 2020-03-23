import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

  static criouCursoNovo = new EventEmitter<string>();

  emitircursoCriado = new EventEmitter<string>();
  cursos: string[] = ['Angular Cli', 'C#', 'SQL'];

  constructor() {
    console.log('CursosService');
  }

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);

    this.emitircursoCriado.emit(curso);
    CursosService.criouCursoNovo.emit(curso);
  }
}
