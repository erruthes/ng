import { Injectable } from '@angular/core';

import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: Aluno[] = [
    {id: 1, nome: 'Aluno 1', email: 'aluno01@email.com' },
    {id: 2, nome: 'Aluno 2', email: 'aluno02@email.com' },
    {id: 3, nome: 'Aluno 3', email: 'aluno03@email.com' },
  ];

  constructor() { }

  getAlunos() {
    return this.alunos;
  }

  getAluno(id) {
    // tslint:disable-next-line: triple-equals
    return this.alunos.find(f => f.id == id);
  }
}
