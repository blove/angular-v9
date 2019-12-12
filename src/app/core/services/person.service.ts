import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import people from '../data/people.json';
import { Person } from '../models/person.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  getAll(): Observable<Array<Person>> {
    return of(people).pipe(
      map(data =>
        data.map(item => ({
          ...item.fields,
          pk: item.pk
        }))
      )
    );
  }

  // search(q: string): Observable<Array<Person>> {
  //   return this.httpClient
  //     .get<SwapiResponse<Person>>(`${this.SWAPI_URL}/people/`, {
  //       params: new HttpParams().set('search', q)
  //     })
  //     .pipe(map(response => response.results));
  // }
}
