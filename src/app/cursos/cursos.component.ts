import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[];


  constructor(cursosService: CursosService) {
    this.nomePortal = 'http://github.com/erruthes';

    // this.cursos = ['Java', 'C#', 'AngularCli'];
    this.cursos = cursosService.getCursos();

    // Código replicado no template para iterar os cursos do array
    // for(let i=0; i<this.cursos.length;i++){
    //   let curso = this.cursos[i];
    // }


   }

  ngOnInit(): void {
  }

}
