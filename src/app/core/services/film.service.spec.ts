import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { FilmService } from './film.service';

describe('FilmService', () => {
  let service: FilmService;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    service = TestBed.inject<FilmService>(FilmService);
    expect(service).toBeTruthy();
  });
});
