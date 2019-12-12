import { TestBed } from '@angular/core/testing';
import { cold, hot } from 'jasmine-marbles';

import { Film, Person } from '../models';
import { FilmService } from './film.service';

describe('FilmService', () => {
  let service: FilmService;

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    service = TestBed.get(FilmService);
    expect(service).toBeTruthy();
  });
});
