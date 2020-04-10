import { AlunosGuard } from './../alunos/guards/alunos.guard';
import { CursosGuard } from './cursos/guards/cursos.guard';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
// import { AlunosComponent } from './../alunos/alunos.component';

const rotasRoutes: Routes = [
  { path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
    canLoad: [AuthGuard]
  },
  // { path: 'alunos', component: AlunosComponent },
  // { path: 'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule' },
  { path: 'alunos',
    loadChildren: () => import('./../alunos/alunos.module').then(m => m.AlunosModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
    // canActivateChild: [AlunosGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  }
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
