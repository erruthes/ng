import { CursoNaoEncontradoComponent } from './rotas/cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './rotas/cursos/cursos.component';
import { LoginComponent } from './rotas/login/login.component';
import { HomeComponent } from './rotas/home/home.component';
import { CursoDetalheComponent } from './rotas/cursos/curso-detalhe/curso-detalhe.component';

const APP_ROUTES: Routes = [
  { path: 'cursos', component: CursosComponent },
  { path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cursoNaoEncontrado', component: CursoNaoEncontradoComponent },
  { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
