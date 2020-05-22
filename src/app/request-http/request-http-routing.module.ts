import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestHttpComponent } from './request-http.component';

const routes: Routes = [
  // { path: 'requestHttp', component: RequestHttpComponent },
  // { path: '', pathMatch: 'full', redirectTo: 'requestHttp' }
  { path: '', pathMatch: 'full', redirectTo: 'cursos' },
  { path: 'cursos', loadChildren: './cursos/cursos.module#CursosModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestHttpRoutingModule { }
