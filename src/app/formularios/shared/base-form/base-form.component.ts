import { FormGroup, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-form',
  template: '<div></div>'
})
export abstract class BaseFormComponent implements OnInit {

  formulario: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  abstract submit();

  onSubmit() {
    if (this.formulario.valid) {
      this.submit();
    } else {
      console.log('Formulário Inválido');
      this.verificaValidacoesFormulario(this.formulario);
    }
  }

  verificaValidacoesFormulario(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log('verificaValidacoesFormulario:' + campo);
      const controle = formGroup.get(campo);

      controle.markAsDirty();
      controle.markAsTouched();

      if (controle instanceof FormGroup
        || controle instanceof FormArray) {
        this.verificaValidacoesFormulario(controle);
      }
    });

  }

  resetarFormulario() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: string) {
    const controle = this.formulario.get(campo);
    return (
      !controle.valid
      && (controle.touched || controle.dirty)
    );
  }

  verificaRequired(campo: string) {
    const controle = this.formulario.get(campo);
    return (
      controle.hasError('required')
      && (controle.touched || controle.dirty)
    );
  }

  emailInvalido(campo: string) {
    const controle = this.formulario.get(campo);
    if (controle.errors) {
      return controle.errors.email && controle.touched;
    }
  }

  getCampo(campo: string) {
    return this.formulario.get(campo);
  }

}
