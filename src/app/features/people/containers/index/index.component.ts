import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person, PersonService } from '../../../../core';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  /** The people of strwrs. */
  people: Observable<Array<Person>>;

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.people = this.personService.getAll();
  }
}
