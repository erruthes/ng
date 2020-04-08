import { AlunosFormComponent } from './../alunos-form/alunos-form.component';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoDeactivateGuard implements CanDeactivate<AlunosFormComponent> {
  canDeactivate(
    component: AlunosFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('guarda de Desativação');

    // return !component.formMudou;
    // return component.podeMudarRota ? component.podeMudarRota() : true;
    return component.podeMudarRota();
  }

}
