import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Aluno } from '../aluno';

@Component({
  selector: 'app-alunos-detalhe',
  templateUrl: './alunos-detalhe.component.html',
  styleUrls: ['./alunos-detalhe.component.css']
})
export class AlunosDetalheComponent implements OnInit, OnDestroy {

  aluno: Aluno;
  inscricao: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    // private alunoService: AlunosService
  ) { }

  ngOnInit(): void {
    // this.inscricao = this.activatedRoute.params.subscribe(
    //   (params: any) => {
    //     const id = params.id;

    //     this.aluno = this.alunoService.getAluno(id);
    //   }
    // );

    this.inscricao = this.activatedRoute.data.subscribe(
      (data: {alunoRes: Aluno}) => {
        console.log(data);
        this.aluno = data.alunoRes;
      }
    );
  }

  editarAluno() {
    this.router.navigate(['/alunos', this.aluno.id, 'edit']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
