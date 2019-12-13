import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Person } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  constructor(private readonly httpClient: HttpClient) {}

  getAll(): Observable<Array<Person>> {
    return this.httpClient.get<Person[]>(`${environment.apiUrl}/people`);
  }
}
