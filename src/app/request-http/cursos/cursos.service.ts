import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { Curso } from './curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = 'http://localhost:3000/cursos';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Curso[]>(this.API)
      .pipe(
        tap(console.log)
        );
  }
}
