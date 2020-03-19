import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
// import { EventEmitter } from 'events'; <= Referência errada!!!

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor = 0;
  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef; // HTMLElement;

  constructor() { }

  ngOnInit(): void {
  }

  incrementa() {
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({valorNovo: this.campoValorInput.nativeElement.value});
  }

  decrementa() {
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({valorNovo: this.campoValorInput.nativeElement.value});
  }

}
