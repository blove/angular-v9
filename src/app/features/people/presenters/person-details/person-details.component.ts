import { Component, Input } from '@angular/core';
import { Person } from '../../../../core';

@Component({
  selector: 'swr-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent {
  /** The person to display the detail of. */
  @Input() person: Person;
}
