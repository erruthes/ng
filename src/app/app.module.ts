import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

import { CursosModule } from './cursos/cursos.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { InputOutputPropertiesModule } from './input-output-properties/input-output-properties.module';
import { LifeCicleModule } from './life-cicle/life-cicle.module';
import { DiretivasModule } from './diretivas/diretivas.module';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  imports: [
    BrowserModule,
    CursosModule,
    LifeCicleModule,
    DataBindingModule,
    DiretivasModule,
    InputOutputPropertiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
