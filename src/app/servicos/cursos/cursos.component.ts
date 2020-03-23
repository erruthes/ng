import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-servicos-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    CursosService.criouCursoNovo.subscribe(
      (cursoCriado: any) => this.cursos.push(cursoCriado)
    );
    this.cursosService.emitircursoCriado.subscribe(
      (curso: any) => console.log(curso)
      // function(curso) {
      //   console.log(curso);
      // }
      );
  }

}
