import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'http://www.github.com/erruthes';
  cursoAngular = true;
  urlImagem = 'http://lorempixel.com/400/200/nature/';

  constructor() { }

  ngOnInit(): void {
  }

  getValor() {
    return 2;
  }

  getCurtirCurso() {
    return true;
  }

}
