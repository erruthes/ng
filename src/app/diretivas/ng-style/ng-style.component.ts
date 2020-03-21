import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  ativo = false;
  tamanhoFonte = 12;

  constructor() { }

  ngOnInit(): void {
  }

  mudarAtivo() {
    this.ativo = !this.ativo;
    this.tamanhoFonte++;
  }
}
