import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestHttpComponent } from './request-http.component';
import { RequestHttpRoutingModule } from './request-http-routing.module';



@NgModule({
  declarations: [RequestHttpComponent],
  imports: [
    CommonModule,
    RequestHttpRoutingModule
  ],
  exports: [
    RequestHttpComponent
  ]
})
export class RequestHttpModule { }