import { SettingsService } from './shared/settings.service';
import { PipesModule } from './pipes/pipes.module';
import { LogService } from './shared/log.service';
import { ServicosModule } from './servicos/servicos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt');

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

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
    InputOutputPropertiesModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ServicosModule,
    PipesModule
  ],
  providers: [
    LogService,
    //  {provide: LOCALE_ID, useValue: 'pt-BR'},
     SettingsService,
     { provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService) => settingsService.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
