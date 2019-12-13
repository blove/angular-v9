import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Person, Planet } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  constructor(private readonly httpClient: HttpClient) {}

  getAll(): Observable<Array<Planet>> {
    return this.httpClient.get<Planet[]>(`${environment.apiUrl}/planets`);
  }

  getPlanetForPerson(character: Person): Observable<Planet> {
    return this.httpClient
      .get<Planet>(
        `${environment.apiUrl}/planets?pk=${character.fields.homeworld}`
      )
      .pipe(map(results => !!results && results[0]));
  }
}
