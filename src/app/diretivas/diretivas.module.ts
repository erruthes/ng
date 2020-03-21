import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';



@NgModule({
  declarations: [
    NgIfComponent,
    NgSwitchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgIfComponent,
    NgSwitchComponent
  ]
})
export class DiretivasModule { }
