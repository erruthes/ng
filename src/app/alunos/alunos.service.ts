import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any[] = [
    {id: 1, nome: 'Aluno 1', email: 'aluno01@email.com' },
    {id: 2, nome: 'Aluno 2', email: 'aluno02@email.com' },
    {id: 3, nome: 'Aluno 3', email: 'aluno03@email.com' },
  ];

  constructor() { }

  getAlunos() {
    return this.alunos;
  }

  getAluno(id) {
    return this.alunos.find(f => f.id == id);
  }
}
