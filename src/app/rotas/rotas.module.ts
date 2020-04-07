import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
// import { routing } from './../aap.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { RotasComponent } from './rotas.component';
// import { CursosComponent } from './cursos/cursos.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursosService } from './cursos/cursos.service';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
// import { CursosRoutingModule } from './cursos/cursos.routing.module';
// import { CursosModule } from './cursos/cursos.module';
// import { AlunosModule } from './../alunos/alunos.module';
// import { AlunosRoutingModule } from './../alunos/alunos.routing.module';
import { RotasRoutingModule } from './rotas.routing.module';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    RotasComponent,
    HomeComponent,
    LoginComponent,
    // CursosComponent,
    // CursoDetalheComponent,
    // CursoNaoEncontradoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    // CursosRoutingModule,
    RotasRoutingModule,
    // AlunosModule,
    // AlunosRoutingModule,
    // CursosModule,

    MatMenuModule,
    MatIconModule,
    MatSliderModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    RotasComponent
  ],
  providers: [
    // CursosService
    AuthService,
    AuthGuard
  ]
})
export class RotasModule { }
