import { Service } from '@angular/core';

@Service()
export class Storage {
  usuarioAtual = 'Bruno';

  atualizarUsuario() {
    this.usuarioAtual = 'Isabela';
  }
}
