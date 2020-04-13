import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulariosRoutingModule } from './formularios-routing.module';
import { FormulariosComponent } from './formularios.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { DataFormComponent } from './data-form/data-form.component';


@NgModule({
  declarations: [
    FormulariosComponent,
    TemplateFormComponent,
    DataFormComponent
  ],
  imports: [
    CommonModule,
    FormulariosRoutingModule
  ],
  exports: [
    FormulariosComponent
  ]
})
export class FormulariosModule { }
