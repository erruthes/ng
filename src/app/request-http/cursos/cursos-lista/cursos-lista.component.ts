import { Router, ActivatedRoute } from '@angular/router';
import { AlertModalService } from './../../shared/alert-modal.service';
import { Observable, EMPTY, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Curso } from './../curso.model';
import { CursosService } from './../cursos.service';
import { catchError } from 'rxjs/operators';

import { AlertModalComponent } from './../../shared/alert-modal/alert-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {
  // cursos: Curso[];
  bsModalRef: BsModalRef;

  // Notação para um Observable
  cursos$: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  constructor(
    private cursosService: CursosService,
    private router: Router,
    private route: ActivatedRoute,
    // private modalService: BsModalService
    private alertModalService: AlertModalService
  ) { }

  ngOnInit(): void {
    // this.cursosService.list()
    // .subscribe(dados => this.cursos = dados);

    this.onRefresh();
  }

  onRefresh() {
    this.cursos$ = this.cursosService.list()
    .pipe(
      catchError(error => {
        console.error(error);
        // this.error$.next(true);
        this.handleError();
        return EMPTY;
      })
    );
  }

  handleError() {
    // this.bsModalRef = this.modalService.show(AlertModalComponent);  // , {initialState});
    // this.bsModalRef.setClass('no-padding');
    // this.bsModalRef.content.type = 'danger';
    // this.bsModalRef.content.message = 'Erro ao carregar cursos. Tente novamente mais tarde.';

    this.alertModalService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.');
  }


  onEdit(id) {
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

}
