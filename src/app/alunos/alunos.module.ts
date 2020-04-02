import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';



@NgModule({
  declarations: [AlunosComponent, AlunosFormComponent, AlunosDetalheComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AlunosComponent
  ]
})
export class AlunosModule { }
