import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

import { CursosService } from './../cursos.service';
import { Curso } from '../curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoResolverGuard implements Resolve<Curso> {

  constructor(
    private service: CursosService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Curso> {
    if (route.params && route.params.id) {
      return of({
        id: null,
        nome: null
      });
        // return this.service.loadById(route.params.id);
    }

    return of({
      id: null,
      nome: null
    });
  }

}
