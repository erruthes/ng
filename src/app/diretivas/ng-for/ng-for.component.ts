import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  cursos = ['AngularCli', 'C#', 'SQL'];
  constructor() { }

  ngOnInit(): void {
    // for (let i = 0; i < this.cursos.length; i++) {
    //   let curso = this.cursos[i];
    // }

    for (const curso of this.cursos) {
    }
  }

}
