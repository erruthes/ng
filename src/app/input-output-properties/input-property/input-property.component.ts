import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  // tslint:disable-next-line: no-inputs-metadata-property
  inputs: ['nome2:nomeTeste2']
})
export class InputPropertyComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('nomeCurso') nome = 'abc';
  nome2 = 'Nome2';

  constructor() { }

  ngOnInit(): void {
  }

}
