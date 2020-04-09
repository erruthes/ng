import { IFormDeactivate } from './../guards/i-form-deactivate';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit, OnDestroy, IFormDeactivate {

  aluno: any;
  inscricao: Subscription;
  private formMudou = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alunoService: AlunosService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.activatedRoute.params.subscribe(
      (params: any) => {
        const id = params.id;

        this.aluno = this.alunoService.getAluno(id);

        if (this.aluno === null) {
          this.aluno = {};
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput() {
    this.formMudou = true;
  }

  podeMudarRota() {
    if (this.formMudou) {
      return confirm('Tem certeza de que deseja abandonar a Edição deste registro:');
    }

    return true;
  }

  podeDesativar(): boolean {
    return this.podeMudarRota();
  }

}
