import { DropdownService } from './services/dropdown.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControlErroComponent } from './form-control-erro/form-control-erro.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';


@NgModule({
  declarations: [
    FormControlErroComponent,
    FormDebugComponent,
    ErrorMsgComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormControlErroComponent,
    FormDebugComponent,
    ErrorMsgComponent
  ],
  providers: [
    DropdownService
  ]

})
export class SharedModule { }
