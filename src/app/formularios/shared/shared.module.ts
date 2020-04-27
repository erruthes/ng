import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControlErroComponent } from './form-control-erro/form-control-erro.component';
import { FormDebugComponent } from './form-debug/form-debug.component';


@NgModule({
  declarations: [
    FormControlErroComponent,
    FormDebugComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormControlErroComponent,
    FormDebugComponent,
  ]
})
export class SharedModule { }
