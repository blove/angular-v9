import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PersonService } from './person.service';

describe('PersonService', () => {
  let service: PersonService;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    service = TestBed.get(PersonService);
    expect(service).toBeTruthy();
  });
});
