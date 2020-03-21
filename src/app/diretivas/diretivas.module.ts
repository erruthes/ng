import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { NgIfComponent } from './ng-if/ng-if.component';



@NgModule({
  declarations: [NgIfComponent],
  imports: [
    CommonModule
  ],
  exports: [NgIfComponent]
})
export class DiretivasModule { }
