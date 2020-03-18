import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPropertyComponent } from './input-property/input-property.component';
import { InputOutputPropertiesComponent } from './input-output-properties.component';



@NgModule({
  declarations: [InputPropertyComponent, InputOutputPropertiesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    InputOutputPropertiesComponent
  ]
})
export class InputOutputPropertiesModule { }
