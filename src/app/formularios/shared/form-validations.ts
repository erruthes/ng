import { FormArray, FormControl, FormGroup } from '@angular/forms';

export class FormValidations {

  static requiredMinCheckbox(min = 1): any {
    const validator = (formArray: FormArray) => {
      const totalChecked = formArray.controls.filter(f => f.value as boolean).length;
      // const totalChecked = formArray.controls
      //   .map(v => v.value)
      //   .reduce((total, current) => current ? total + current : total, 0);

      if (!(formArray.touched || formArray.dirty)) {
        return null;
      }

      return (totalChecked >= min) ? null : { required: true };
    };

    return validator;
  }

  static cepValidator(contlor: FormControl) {
    const cep = contlor.value;

    if (cep && cep !== '') {
      const validaCep = /^[0-9]{8}$/;
      return validaCep.test(cep) ? null : { cepInvalido: true };
    }

    return null;
  }


  static equalsTo(otherField: string) {
    const validator = (formControl: FormControl) => {
        if (otherField == null) {
          throw new Error('É necessário informar um campo.');
        }

        if (!formControl.root || !(formControl.root as FormGroup).controls) {
          return null;
        }

        const field = (formControl.root as FormGroup).get(otherField);

        if (!field) {
          throw new Error('É necessário informar um campo Válido.');
        }

        if (field.value !== formControl.value) {
          return { equalsTo: otherField };
        }

        return null;
      };

    return validator;
  }

}
