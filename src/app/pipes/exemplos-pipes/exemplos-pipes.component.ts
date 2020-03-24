import { Component, OnInit } from '@angular/core';

// import { registerLocaleData } from '@angular/common';
// import localePt from '@angular/common/locales/pt';
// registerLocaleData(localePt, 'pt');

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  book: any = {
    title: 'Learning JavaScript Data Structure and Algorithms 2nd ed',
    rating: 4.54321,
    numPages: 314,
    price: 44.99,
    dateRelease: new Date(2016, 5, 23), // o indice di mes começa em 0
    url: 'http://a.co/glqjpRP'
  };
  livros = ['AngularCli', 'C#'];
  filtro: '';

  constructor() { }

  ngOnInit(): void {
  }

  addLivro(livro: any) {
    this.livros.push(livro);
    console.log(livro);
  }

}
