import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

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

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000);
  });

  // valorAsync2 = Observable.interval(2000).map(valor => 'Valor Assíncrono 2');
  valorAsync2 = interval(3000).pipe(map(valor => 'Valor Assincrono 3'));

  valorAsync3 = new Observable(observer => {
    setTimeout(() => {
      observer.next('Valor Assíncrono 2');
    }, 5000);
  });



  // valorAsync2 = new Observable(observer => {
  //   setTimeout(() => observer.map(valor => '')
  //             , 2000);
  // });

  constructor() { }

  ngOnInit(): void {
  }

  addLivro(livro: any) {
    this.livros.push(livro);
    console.log(livro);
  }

  obterLivros() {
    if (this.livros.length === 0
      || this.filtro === undefined
      || this.filtro.trim() === '') {
        return this.livros;
    }

    return this.livros.filter(v => {
      if (v.toLocaleLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

}
