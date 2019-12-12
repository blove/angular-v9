import { Component, Input } from '@angular/core';
import { Film } from '../../../../core';

@Component({
  selector: 'swr-person-films',
  templateUrl: './person-films.component.html',
  styleUrls: ['./person-films.component.scss']
})
export class PersonFilmsComponent {
  /** The films for the specified person. */
  @Input() films: Film[];
}
