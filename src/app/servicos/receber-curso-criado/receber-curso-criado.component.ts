import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})
export class ReceberCursoCriadoComponent implements OnInit {

  curso: string;

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursosService.emitircursoCriado.subscribe(
      (cursoCriado: any) => {
        this.curso = cursoCriado;
        console.log(cursoCriado);
      }
    );
  }

}
