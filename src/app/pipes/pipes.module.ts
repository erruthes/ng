import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';



@NgModule({
  declarations: [
    ExemplosPipesComponent,
    CamelCasePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExemplosPipesComponent
  ]
})
export class PipesModule { }
