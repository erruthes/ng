import { Router, ActivatedRoute } from '@angular/router';
import { Observable, EMPTY, Subject, interval } from 'rxjs';
import { catchError, take, switchMap } from 'rxjs/operators';
import { Component, OnInit, ViewChild } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { AlertModalService } from './../../shared/alert-modal.service';
import { AlertModalComponent } from './../../shared/alert-modal/alert-modal.component';
import { Curso } from './../curso.model';
import { CursosService } from './../cursos.service';


@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {
  // cursos: Curso[];
  // bsModalRef: BsModalRef;
  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal') deleteModal;
  cursoSelecionado: Curso;

  // Notação para um Observable
  cursos$: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  constructor(
    private cursosService: CursosService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService,
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

  onDelete(curso) {
    this.cursoSelecionado = curso;
    // this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
    const result$ = this.alertModalService.showConfirm('Confirmação', 'Tem certeza que desja remover esse curso?');
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.cursosService.remove(curso.id) : EMPTY)
      )
      .subscribe(
        sucess => {
          this.alertModalService.showAlertSuccess('Curso removido com sucesso.');
          this.onRefresh();
        },
        error => {
          this.alertModalService.showAlertDanger('Erro ao deletar cursos. Tente novamente mais tarde.');
        }
        );

    // this.router.navigate(['deletar', id], {relativeTo: this.route});
  }

  onConfirmDelete() {
    this.cursosService.remove(this.cursoSelecionado.id).subscribe(
      sucess => {
        this.alertModalService.showAlertSuccess('Curso removido com sucesso.');
        this.onRefresh();
        this.deleteModalRef.hide();
      },
      error => {
        this.alertModalService.showAlertDanger('Erro ao deletar cursos. Tente novamente mais tarde.');
        this.deleteModalRef.hide();
      }
    );
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

}
