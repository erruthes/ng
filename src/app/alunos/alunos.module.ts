import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';
import { AlunosGuard } from './guards/alunos.guard';
import { AlunoDeactivateGuard } from './guards/aluno-deactivate.guard';
import { AlunosDetalheResolver } from './guards/alunos-detalhe.resolver';


@NgModule({
  declarations: [AlunosComponent, AlunosFormComponent, AlunosDetalheComponent],
  imports: [
    CommonModule,
    FormsModule,

    MatGridListModule,
    MatListModule,
    AlunosRoutingModule
  ],
  exports: [
    AlunosComponent
  ],
  providers: [
    AlunosService,
    AlunosGuard,
    AlunoDeactivateGuard,
    AlunosDetalheResolver
  ]
})
export class AlunosModule { }
