import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Curso } from './../curso.model';
import { CursosService } from './../cursos.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {
  // cursos: Curso[];

  // Notação para um Observable
  cursos$: Observable<Curso[]>;

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    // this.cursosService.list()
    // .subscribe(dados => this.cursos = dados);

    this.cursos$ = this.cursosService.list();
  }

}
