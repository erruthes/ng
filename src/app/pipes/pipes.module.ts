import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';



@NgModule({
  declarations: [ExemplosPipesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ExemplosPipesComponent
  ]
})
export class PipesModule { }
