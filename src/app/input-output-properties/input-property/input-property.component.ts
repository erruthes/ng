import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  inputs: ['nome2:nomeTeste2']
})
export class InputPropertyComponent implements OnInit {

  @Input('nomeCurso') nome = 'abc';
  nome2 = 'Nome2';

  constructor() { }

  ngOnInit(): void {
  }

}
