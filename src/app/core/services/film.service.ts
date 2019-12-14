import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Film, Person } from '../models';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  constructor(private readonly httpClient: HttpClient) {}

  getAll(): Observable<Array<Film>> {
    return this.httpClient.get<Film[]>(`${environment}/films`);
  }

  getFilmsByCharacter(character: Person): Observable<Array<Film>> {
    return this.httpClient.get<Film[]>(
      `${environment.apiUrl}/films?fields.characters_like=${character.pk}`
    );
  }
}
