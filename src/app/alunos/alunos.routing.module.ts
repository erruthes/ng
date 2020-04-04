import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';

const alunoRoutes: Routes = [
  { path: 'alunos', component: AlunosComponent,
    children: [
      { path: ':id', component: AlunosDetalheComponent },
      { path: 'novo', component: AlunosFormComponent },
      { path: ':id/edit', component: AlunosFormComponent }
    ]},
  // { path: 'alunos/novo', component: AlunosFormComponent },
  // { path: 'alunos/:id', component: AlunosDetalheComponent },
  // { path: 'alunos/:id/edit', component: AlunosFormComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(alunoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AlunosRoutingModule {}
