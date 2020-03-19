import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngLoiane';
  nomeCurso = 'C#';
  valor = 5;
  deletarCiclo = 'Deletar';

  mudarValor() {
    this.valor++;
  }

  destruirCiclo() {
    if (this.deletarCiclo === 'Deletar') {
      this.deletarCiclo = 'Inserir';
    } else {
      this.deletarCiclo = 'Deletar';
    }
  }
}
