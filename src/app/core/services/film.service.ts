import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import films from '../data/films.json';
import { Film, Person } from '../models';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  getAll(): Observable<Array<Film>> {
    return of(films).pipe(
      map(data =>
        data.map(item => ({
          ...item.fields,
          pk: item.pk
        }))
      )
    );
  }

  getFilmsByCharacter(character: Person): Observable<Array<Film>> {
    return of(films).pipe(
      map(data =>
        data.map(item => ({
          ...item.fields,
          pk: item.pk
        }))
      ),
      map(films =>
        films.filter(film => film.characters.indexOf(character.pk) > -1)
      )
    );
  }
}
