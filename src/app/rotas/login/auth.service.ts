import { Usuario } from './usuario';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAutenticado = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router
  ) { }

  logar(usuario: Usuario) {
    if (usuario.nome === 'usuario@email.com'
      && usuario.senha === '1234') {
        this.usuarioAutenticado = true;
        this.mostrarMenuEmitter.emit(true);

        this.router.navigate(['/']);
      } else {
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false);
      }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
