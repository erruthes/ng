import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
// import { EventEmitter } from 'events'; <= Referência errada!!!

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor = 0;
  @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  incrementa() {
    this.valor++;
    this.mudouValor.emit({valorNovo: this.valor});
  }

  decrementa() {
    this.valor--;
    this.mudouValor.emit({valorNovo: this.valor});
  }

}
