import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';



@NgModule({
  declarations: [
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent
  ]
})
export class DiretivasModule { }
