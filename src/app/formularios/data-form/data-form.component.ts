import { DropdownService } from './../shared/services/dropdown.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

import { EstadoBr } from './../shared/models/estado-br.model';
import { ConsultaCepService } from './../shared/services/consulta-cep.service';
import { FormValidations } from '../shared/form-validations';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  estados: Observable<EstadoBr[]>;
  cargos: any[];
  tecnologias: any[];
  newsletters: any[];
  frameworks = ['Angular', 'React', 'Vue', 'Sencha'];
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService
  ) { }

  ngOnInit(): void {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });

    // this.dropdownService.getEstadosBr()
    //   .subscribe(dados => {
    //     this.estados = dados;
    //     console.log(dados);
    //     }
    //   );
    this.estados = this.dropdownService.getEstadosBr();

    this.cargos = this.dropdownService.getCargos();

    this.tecnologias = this.dropdownService.getTecnologias();

    this.newsletters = this.dropdownService.getNewsletters();

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
      }),

      cargo: [null],
      tecnologias: [null],
      newsletter: [this.newsletters[0].nome],
      termos: [null, Validators.requiredTrue],
      frameworks: this.buildFrameworks()
    });
  }

  buildFrameworks() {
    const values = this.frameworks.map(v => new FormControl(false));

    return this.formBuilder.array(values, FormValidations.requiredMinCheckbox(2));

    // return [
    //   new FormControl(false),
    //   new FormControl(false),
    //   new FormControl(false),
    //   new FormControl(false),
    // ];
  }

  get formData() {
    return this.formulario.get('frameworks') as FormArray;
  }

  mapCheckboxToNamedArray() {
    let valueSubmit = Object.assign({}, this.formulario.value);

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
        .map((v, i) => v ? this.frameworks[i] : null)
        .filter(v => v !== null)
    });

    return valueSubmit;
  }

  onSubmit() {
    console.log(this.formulario);

    const valueSubmit = this.mapCheckboxToNamedArray();

    if (this.formulario.valid) {
      this.httpClient.post('https://httpbin.org/post',
                          JSON.stringify(valueSubmit))
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
      console.log('verificaValidacoesFormulario:' + campo);
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
    const valorCep = this.formulario.get(campoCep).value;

    this.resetaDadosForm();

    if (valorCep != null && valorCep !== '') {
      this.cepService.consultaCEP(valorCep)
        .subscribe(dados => this.populaDadosForm(dados));
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

    setCargo() {
      const cargo = {nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl'};
      this.formulario.get('cargo').setValue(cargo);
    }

    compararCargos(obj1, obj2) {
      return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : false;
    }

    setTecnologias() {
      this.formulario.get('tecnologias').setValue(['python', 'c#']);
    }
}
