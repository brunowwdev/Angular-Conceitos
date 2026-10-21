import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Service()
export class JsonPlaceholder {
  private readonly _httpClient = inject(HttpClient);

  getPosts(): Observable<IPost[]> {
    return this._httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
