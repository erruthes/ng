import { FormArray } from '@angular/forms';

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

}
