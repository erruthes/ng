import { CursosService } from '../cursos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  id: number;
  activeRouteSubscription: Subscription;
  curso: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService,
  ) {
    // console.log(this.activatedRoute);
    // this.id = this.activatedRoute.snapshot.params.id;
   }

  ngOnInit(): void {
    this.activeRouteSubscription = this.activatedRoute.params.subscribe(
                                      (params: any) => {
                                        this.id = params.id;
                                        // console.log('Id:' + this.id);
                                        this.curso = this.cursosService.getCurso(this.id);

                                        if (this.curso == null) {
                                          this.router.navigate(['cursoNaoEncontrado']);
                                        }                                                                          }
                                    );
  }

  ngOnDestroy() {
    this.activeRouteSubscription.unsubscribe();
  }

}
