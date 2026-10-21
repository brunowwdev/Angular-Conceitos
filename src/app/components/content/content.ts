import { Component, inject } from '@angular/core';
import { IPost, JsonPlaceholder } from '../../services/json-placaholder';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ FormsModule, ReactiveFormsModule ],
  selector: 'app-content',
  styleUrl: './content.css',
  templateUrl: './content.html',
})
export class Content {

  postsList: IPost[] = [];

  readonly _jsonPlaceholder = inject(JsonPlaceholder);

  // nomeUsuario = '';

  usuarioForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this._jsonPlaceholder.getPosts().subscribe((response) => {
        console.log('Response:', response);
        this.postsList = response;
      }
    )
  }

  // enviarForm(){
  //   console.log(this.nomeUsuario);
  // }

  enviarFormulario() {
    console.log('Formulário: ',this.usuarioForm);
  }
}
