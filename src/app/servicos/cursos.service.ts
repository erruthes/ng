import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {
  cursos: string[] = ['Angular Cli', 'C#', 'SQL'];

  constructor() {
    console.log('CursosService');
  }

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
  }
}
