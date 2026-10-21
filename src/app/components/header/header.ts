import { Component, Input, EventEmitter, Output , inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Storage} from '../../services/storage';

@Component({
  imports: [FormsModule],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  tituloHeader = 'Youtube';
  habilitarBotao = true;
  valorInput = 'valor inicial';
  aplicarClasse = false;
  estiloCor = 'orange';
  iforelse: 'if' | 'else' = 'if';
  readonly _storageService = inject(Storage);

  atualizarUsuario() {
    this._storageService.atualizarUsuario();
  }

  @Input() titulo: string = '';

  @Output() textoEmit = new EventEmitter<string>();


  usuarios = [
    {
      id: 0,
      nome: 'Bruno'
    },
    {
      id: 1,
      nome: 'Isabela'
    }
  ]

  atualizarTitulo() {
    this.tituloHeader = 'Isabela';
  }

  atualizarInput(){
    console.log(this.valorInput);
  }

  aplicarCss(){
    this.aplicarClasse = !this.aplicarClasse;
  }

  atualizarCor(){
    this.estiloCor = 'blue';
  }

  emitirValor(){
    this.textoEmit.emit('texto passado do header para o app');
  }
}
