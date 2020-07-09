import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, delay, take } from 'rxjs/operators';

import { Curso } from './curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = `${environment.API}cursos`;

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Curso[]>(this.API)
      .pipe(
        delay(2000),
        tap(console.log)
        );
  }

  private create(curso) {
    return this.httpClient.post(this.API, curso).pipe(take(1));
  }

  loadById(id) {
    return this.httpClient.get<Curso>(`${this.API}/${id}`).pipe(take(1));
  }

  private update(curso) {
    return this.httpClient.put(`${this.API}/${curso.id}`, curso).pipe(take(1));
  }

  save(curso) {
    console.log(curso);
    if (curso.id) {
      return this.update(curso);
    } else {
      return this.create(curso);
    }
  }

}
