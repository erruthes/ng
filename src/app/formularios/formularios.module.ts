import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';

import { FormulariosRoutingModule } from './formularios-routing.module';
import { FormulariosComponent } from './formularios.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { DataFormComponent } from './data-form/data-form.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { FormControlErroComponent } from './form-control-erro/form-control-erro.component';


@NgModule({
  declarations: [
    FormulariosComponent,
    TemplateFormComponent,
    DataFormComponent,
    FormDebugComponent,
    FormControlErroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormulariosRoutingModule,

    MatInputModule
  ],
  exports: [
    FormulariosComponent
  ]
})
export class FormulariosModule { }
