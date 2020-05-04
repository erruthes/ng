import { EstadoBr } from './../models/estado-br.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private httpClient: HttpClient) { }

  getEstadosBr() {
    return this.httpClient.get<EstadoBr[]>('assets/estadosBr.json');
  }

  getCargos() {
    return [
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr'},
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl'},
      { nome: 'Dev', nivel: 'Sênior', desc: 'Dev Sr'},
    ];
  }

  getTecnologias() {
    return [
      { nome: 'c#', desc: 'C#'},
      { nome: 'java', desc: 'Java'},
      { nome: 'angular', desc: 'AngulaCli'},
      { nome: 'python', desc: 'Python'},
    ];
  }

  getNewsletters() {
    return [
      { nome: 'nao', desc: 'Não'},
      { nome: 'sim', desc: 'Sim'},
    ];
  }
}
