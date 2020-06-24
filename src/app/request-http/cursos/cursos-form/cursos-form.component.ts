import { ActivatedRoute } from '@angular/router';
import { AlertModalService } from './../../shared/alert-modal.service';
import { CursosService } from './../cursos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { map, switchMap } from 'rxjs/operators';
import { Curso } from '../curso.model';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private service: CursosService,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // this.route.params
    // .pipe(
    //   map((params: any) => params.id),
    //   switchMap(id => this.service.loadById(id))
    // )
    // .subscribe(curso => this.updateForm(curso));

    const curso = this.route.snapshot.data.curso as Curso;

    this.form = this.fb.group({
      id: [curso.id],
      nome: [curso.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]]
    });
  }

  // updateForm(curso) {
  //   this.form.patchValue({
  //     id: curso.id,
  //     nome: curso.nome
  //   });
  // }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);

    if (this.form.valid) {
      console.log('submit');
      this.service.create(this.form.value).subscribe(
        sucesso => {
          this.modal.showAlertSuccess('Curso criado com Sucesso');
          this.location.back();
        },
        erro => this.modal.showAlertDanger('Erro ao criar Curso'),
        () => console.log('request completo')
      );
    }
  }

  onCancel() {
    this.submitted = false;
    console.log('cancel');

  }

  hasError(componente: string) {
    // console.log(this.form.get(componente).errors);
    return this.form.get(componente).errors;
  }

}
