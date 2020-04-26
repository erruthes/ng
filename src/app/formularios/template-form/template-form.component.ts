import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

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


  consultaCEP(valorCep: string, ngForm: NgForm) {
    console.log(valorCep);

    this.resetaDadosForm(ngForm);

    valorCep = valorCep.replace(/\D/g, '');

    if (valorCep !== '') {
      const validaCep = /^[0-9]{8}$/;

      if (validaCep.test(valorCep)) {

        this.httpClient.get(`https://viacep.com.br/ws/${valorCep}/json`)
          .subscribe(dados => {
            console.log(dados);
            this.populaDadosForm(dados, ngForm);
          });
      }
    }
  }

  populaDadosForm(dados, ngForm: NgForm) {
  //   ngForm.setValue({
  //     nome2: ngForm.value.nome2,
  //     email2: ngForm.value.email2,
  //     endereco: {
  //       cep2: dados.cep,
  //       numero2: '',
  //       complemento2: dados.complemento,
  //       rua2: dados.logradouro,
  //       bairro2: dados.bairro,
  //       cidade2: dados.localidade,
  //       estado2: dados.uf
  //     }
  //   });

    console.log(ngForm);

    ngForm.form.patchValue({
      endereco: {
        cep2: dados.cep,
        complemento2: dados.complemento,
        rua2: dados.logradouro,
        bairro2: dados.bairro,
        cidade2: dados.localidade,
        estado2: dados.uf
      }
    });
  }

  resetaDadosForm(ngForm: NgForm) {
    ngForm.form.patchValue({
      endereco: {
        cep2: null,
        complemento2: null,
        rua2: null,
        numero2: null,
        bairro2: null,
        cidade2: null,
        estado2: null
      }
    });
  }
}
