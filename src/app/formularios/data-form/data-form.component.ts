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
      ]
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

}
