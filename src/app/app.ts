import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Content } from './components/content/content';

@Component({
  imports: [RouterOutlet, Header, Content , RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('principais-funcionalidades-angular');

  titulo = 'titulo do header vindo do app component';

  receberValor(valor: string) {
    console.log('valor recebido do header: ', valor);
  }
}
