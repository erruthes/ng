import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeCicleComponent } from './life-cicle.component';



@NgModule({
  declarations: [LifeCicleComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LifeCicleComponent
  ]
})
export class LifeCicleModule { }
