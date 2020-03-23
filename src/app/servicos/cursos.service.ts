import { LogService } from './../shared/log.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

  static criouCursoNovo = new EventEmitter<string>();

  emitircursoCriado = new EventEmitter<string>();
  cursos: string[] = ['Angular Cli', 'C#', 'SQL'];

  constructor(private logService: LogService) {
    console.log('CursosService');
  }

  getCursos() {
    this.logService.consoleLog('Obtendo lista de cursos');
    return this.cursos;
  }

  addCurso(curso: string) {
    this.logService.consoleLog(`Criando um novo curso ${curso}`);
    this.cursos.push(curso);

    this.emitircursoCriado.emit(curso);
    CursosService.criouCursoNovo.emit(curso);
  }
}
