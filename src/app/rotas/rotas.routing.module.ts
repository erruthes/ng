import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
// import { AlunosComponent } from './../alunos/alunos.component';

const rotasRoutes: Routes = [
  // { path: 'alunos', component: AlunosComponent },
  // { path: 'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule' },
  { path: 'alunos', loadChildren: () => import('./../alunos/alunos.module').then(m => m.AlunosModule) },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(rotasRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RotasRoutingModule {}
