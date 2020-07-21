import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap/modal';

import { RequestHttpComponent } from './request-http.component';
import { RequestHttpRoutingModule } from './request-http-routing.module';
import { SharedModule } from './shared/shared.module';
// import { CursosModule } from './cursos/cursos.module';
// import { UnsubscribeRxjsModule } from './unsubscribe-rxjs/unsubscribe-rxjs.module';
import { UploadFileModule } from './upload-file/upload-file.module';



@NgModule({
  declarations: [RequestHttpComponent],
  imports: [
    CommonModule,
    RequestHttpRoutingModule,
    SharedModule,
    // CursosModule,
    // UnsubscribeRxjsModule
    ModalModule.forRoot(),
    HttpClientModule,
    UploadFileModule
  ],
  exports: [
    RequestHttpComponent
  ]
})
export class RequestHttpModule { }
