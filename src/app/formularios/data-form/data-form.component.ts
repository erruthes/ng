import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });

    this.formulario = this.formBuilder.group({
      nome: [null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25)
        ]
      ],
      email: [null,
        [
          Validators.required,
          Validators.email
        ]
      ],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    });
  }

  onSubmit() {
    console.log(this.formulario);

    if (this.formulario.valid) {
      this.httpClient.post('https://httpbin.org/post',
                          JSON.stringify(this.formulario.value))
        .subscribe(dados => {
          console.log(dados);

          // this.resetarFormulario();
        },
        (erro: any) => alert('Erro')
      );
    } else {
      console.log('Formulário Inválido');
      this.verificaValidacoesFormulario(this.formulario);
    }
  }

  verificaValidacoesFormulario(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);

      controle.markAsDirty();

      if (controle instanceof FormGroup) {
        this.verificaValidacoesFormulario(controle);
      }
    });

  }
  resetarFormulario() {
    this.formulario.reset();
  }

  controleInvalido(campo) {
    const controle = this.formulario.get(campo);
    return !controle.valid && (controle.touched || controle.dirty);
  }

  // aplicaCssErro(campo) {
  //   return {
  //     'has-error': this.controleInvalido(campo),
  //     'has-feedback': this.controleInvalido(campo)
  //   };
  // }

  emailInvalido(campo: string) {
    const controle = this.formulario.get(campo);
    if (controle.errors) {
      return controle.errors.email;
    }
  }


  consultaCEP(campoCep: string) {

    let valorCep = this.formulario.get(campoCep).value;

    this.resetaDadosForm();

    valorCep = valorCep.replace(/\D/g, '');

    if (valorCep !== '') {
      const validaCep = /^[0-9]{8}$/;

      if (validaCep.test(valorCep)) {

        this.httpClient.get(`https://viacep.com.br/ws/${valorCep}/json`)
          .subscribe(dados => {
            console.log(dados);
            this.populaDadosForm(dados);
          });
      }
    }
  }


  populaDadosForm(dados) {
    //   ngForm.setValue({
    //     nome2: formulario.value.nome2,
    //     email2: formulario.value.email2,
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

      // console.log(ngForm);

      this.formulario.patchValue({
        endereco: {
          cep: dados.cep,
          complemento: dados.complemento,
          rua: dados.logradouro,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf
        }
      });

      // this.formulario.get('nome').setValue('Teste');
    }

    resetaDadosForm() {
      this.formulario.patchValue({
        endereco: {
          cep: null,
          complemento: null,
          rua: null,
          numero: null,
          bairro: null,
          cidade: null,
          estad: null
        }
      });
    }

}
