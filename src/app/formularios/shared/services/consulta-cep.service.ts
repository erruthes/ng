import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(
    private httpClient: HttpClient
  ) { }


  consultaCEP(valorCep: string) {

    valorCep = valorCep.replace(/\D/g, '');

    if (valorCep !== '') {
      const validaCep = /^[0-9]{8}$/;

      if (validaCep.test(valorCep)) {

        return this.httpClient.get(`https://viacep.com.br/ws/${valorCep}/json`);

      }
    }

    return of({});
  }

}
