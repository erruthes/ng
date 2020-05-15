import { FormsModule } from '@angular/forms';
import { DropdownService } from './services/dropdown.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControlErroComponent } from './form-control-erro/form-control-erro.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { InputFieldComponent } from './input-field/input-field.component';


@NgModule({
  declarations: [
    FormControlErroComponent,
    FormDebugComponent,
    ErrorMsgComponent,
    InputFieldComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormControlErroComponent,
    FormDebugComponent,
    ErrorMsgComponent,
    InputFieldComponent
  ],
  providers: [
    DropdownService
  ]

})
export class SharedModule { }
