import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosGuard implements CanActivateChild {
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // console.log(next);
    // console.log(state);
    console.log('AlunosGuard.canActivateChild');

    if (state.url.includes('edit')) {
    //   alert('Usuário não possui acesso para Editar um Aluno');
    //   return of(false);
    }

    return true;
  }
}
