import { DataFormModule } from './data-form/data-form.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatInputModule} from '@angular/material/input';

import { SharedModule } from './shared/shared.module';
import { FormulariosRoutingModule } from './formularios-routing.module';
import { FormulariosComponent } from './formularios.component';
import { TemplateFormComponent } from './template-form/template-form.component';
// import { DataFormComponent } from './data-form/data-form.component';
// import { FormDebugComponent } from './form-debug/form-debug.component';
// import { FormControlErroComponent } from './form-control-erro/form-control-erro.component';


@NgModule({
  declarations: [
    FormulariosComponent,
    TemplateFormComponent,
    // DataFormComponent,
    // FormDebugComponent,
    // FormControlErroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormulariosRoutingModule,
    HttpClientModule,
    DataFormModule,
    SharedModule,

    MatInputModule
  ],
  exports: [
    FormulariosComponent
  ]
})
export class FormulariosModule { }
