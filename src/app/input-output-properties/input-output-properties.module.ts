import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPropertyComponent } from './input-property/input-property.component';
import { InputOutputPropertiesComponent } from './input-output-properties.component';
import { OutputPropertyComponent } from './output-property/output-property.component';



@NgModule({
  declarations: [InputPropertyComponent, InputOutputPropertiesComponent, OutputPropertyComponent],
  imports: [
    CommonModule
  ],
  exports: [
    InputOutputPropertiesComponent
  ]
})
export class InputOutputPropertiesModule { }
