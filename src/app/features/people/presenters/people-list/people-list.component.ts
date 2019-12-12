import { Component, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Observable } from 'rxjs';

import { Film, FilmService, Person } from '../../../../core';

@Component({
  selector: 'swr-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent {
  /** The people to display. */
  @Input() people: Person[];

  /** Associated films by person. */
  filmsByPerson = new Map<Person, Observable<Array<Film>>>();

  /** True if the content should be translated for Chewbaka */
  translateToWookiee = false;

  constructor(private readonly filmService: FilmService) {}

  onAfterExpand(person: Person): void {
    const films = this.filmService.getFilmsByCharacter(person);
    this.filmsByPerson.set(person, films);
  }

  onTranslate(): void {
    this.translateToWookiee = !this.translateToWookiee;
  }
}
