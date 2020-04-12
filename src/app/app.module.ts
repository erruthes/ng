import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
// import { routing } from './aap.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt');

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

import { CursosModule } from './cursos/cursos.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { InputOutputPropertiesModule } from './input-output-properties/input-output-properties.module';
import { LifeCicleModule } from './life-cicle/life-cicle.module';
import { DiretivasModule } from './diretivas/diretivas.module';
import { SettingsService } from './shared/settings.service';
import { PipesModule } from './pipes/pipes.module';
import { LogService } from './shared/log.service';
import { ServicosModule } from './servicos/servicos.module';
import { RotasModule } from './rotas/rotas.module';
import { AppRoutingModule } from './app.routing.module';
// import { AlunosModule } from './alunos/alunos.module';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,

    MatMenuModule,
    MatIconModule,
    MatSliderModule,
    MatToolbarModule,
    // MatListModule,

    CursosModule,
    LifeCicleModule,
    DataBindingModule,
    DiretivasModule,
    InputOutputPropertiesModule,
    BrowserAnimationsModule,
    ServicosModule,
    PipesModule,
    // RotasModule,
    // routing
    AppRoutingModule,
    // AlunosModule,
  ],
  providers: [
    LogService,
    // {provide: LOCALE_ID, useValue: 'pt-BR'},
    SettingsService,
    { provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService) => settingsService.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
