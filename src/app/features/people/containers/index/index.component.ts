import { Component } from '@angular/core';
import { Subject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { PersonService } from '../../../../core';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  /** Search query. */
  q = new Subject<string>();

  /** The people of strwrs. */
  people = combineLatest(this.personService.getAll(), this.q).pipe(
    map(([people, q]) =>
      people.filter(person => person.name.match(new RegExp(q, 'i')))
    )
  );

  constructor(private personService: PersonService) {}

  onQChange(q): void {
    this.q.next(q);
  }
}
