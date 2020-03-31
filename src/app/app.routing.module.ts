import { NgModule } from '@angular/core';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './rotas/cursos/cursos.component';
import { LoginComponent } from './rotas/login/login.component';
import { HomeComponent } from './rotas/home/home.component';
import { CursoDetalheComponent } from './rotas/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './rotas/curso-nao-encontrado/curso-nao-encontrado.component';

const appRoutes: Routes = [
  { path: 'cursos', component: CursosComponent },
  { path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cursoNaoEncontrado', component: CursoNaoEncontradoComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
