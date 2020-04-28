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

    this.httpClient.post('https://httpbin.org/post',
                        JSON.stringify(this.formulario.value))
      .subscribe(dados => {
        console.log(dados);

        // this.resetarFormulario();
      },
      (erro: any) => alert('Erro'));
  }

  resetarFormulario() {
    this.formulario.reset();
  }

  controleInvalido(campo) {
    const controle = this.formulario.get(campo);
    return !controle.valid && controle.touched;
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

}
