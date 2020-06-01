import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { RequestHttpComponent } from './request-http.component';
// import { UnsubscribeRxjsModule } from './unsubscribe-rxjs/unsubscribe-rxjs.module';

const routes: Routes = [
  // { path: 'requestHttp', component: RequestHttpComponent },
  // { path: '', pathMatch: 'full', redirectTo: 'requestHttp' }
  { path: '', pathMatch: 'full', redirectTo: 'cursos' },
  // { path: 'cursos', loadChildren: './cursos/cursos.module#CursosModule' },
  { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule) },
  { path: 'rxjs-poc', loadChildren: () => import('./unsubscribe-rxjs/unsubscribe-rxjs.module').then(m => m.UnsubscribeRxjsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestHttpRoutingModule { }
