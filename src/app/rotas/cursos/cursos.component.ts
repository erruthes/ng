import { CursosService } from './cursos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {

  cursos: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(
    private cursosService: CursosService,
    private activatedRote: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    this.inscricao = this.activatedRote.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams.pagina;
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    // this.pagina++;
    this.router.navigate(['/cursos'],
    {queryParams: {pagina: ++this.pagina}});
  }

}
