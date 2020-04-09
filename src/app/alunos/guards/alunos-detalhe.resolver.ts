import { AlunosService } from './../alunos.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Aluno } from '../aluno';

@Injectable({ providedIn: 'root' })
export class AlunosDetalheResolver implements Resolve<Aluno> {

  constructor(
    private alunosService: AlunosService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Aluno> | Promise<Aluno> | Aluno {
    console.log('AlunosDetalheResolver');

    const id = route.params.id;
    return this.alunosService.getAluno(id);
  }
}
