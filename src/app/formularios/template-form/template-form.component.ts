import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private httpClient: HttpClient) { }

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


  consultaCEP(valorCep) {
    console.log(valorCep);

    valorCep = valorCep.replace(/\D/g, '');

    if (valorCep !== '') {
      const validaCep = /^[0-9]{8}$/;

      if (validaCep.test(valorCep)) {

        this.httpClient.get(`https://viacep.com.br/ws/${valorCep}/json`)
          .subscribe(dados => {
            console.log(dados);

          });
      }
    }
  }

}
