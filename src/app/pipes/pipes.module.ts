import { FormsModule } from '@angular/forms';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FiltroArrayInpuroPipe } from './filtro-array-inpuro.pipe';



@NgModule({
  declarations: [
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayInpuroPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ExemplosPipesComponent
  ]
})
export class PipesModule { }
