import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-control-erro',
  templateUrl: './form-control-erro.component.html',
  styleUrls: ['./form-control-erro.component.css']
})
export class FormControlErroComponent implements OnInit {

  @Input() mostrarErro: boolean;
  @Input() msgErro: string;

  constructor() { }

  ngOnInit(): void {
  }

}
