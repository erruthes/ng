import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
// import { LoginComponent } from '../login/login.component';
// import { HomeComponent } from '../home/home.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const cursosRoutes: Routes = [
  { path: 'cursos', component: CursosComponent },
  { path: 'curso/:id', component: CursoDetalheComponent },
  // { path: 'login', component: LoginComponent },
  { path: 'cursoNaoEncontrado', component: CursoNaoEncontradoComponent },
  // { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(cursosRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CursosRoutingModule {}
