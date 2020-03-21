import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassComponent } from './ng-class/ng-class.component';



@NgModule({
  declarations: [
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    NgClassComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    NgClassComponent
  ]
})
export class DiretivasModule { }
