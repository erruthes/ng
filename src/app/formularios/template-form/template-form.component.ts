import { Usuario } from './../../rotas/login/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null, // 'Eduardo',
    email: null // 'eruthes@gmail.com'
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    console.log(form);

    console.log(this.usuario);
  }

  controleInvalido(controle) {
    return !controle.valid && controle.touched;
  }

  aplicaCssErro(controle) {
    return {
      'has-error': this.controleInvalido(controle),
      'has-feedback': this.controleInvalido(controle)
    };
  }

}
