import { Component, Input } from '@angular/core';
import { Planet } from 'src/app/core';

@Component({
  selector: 'swr-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent {
  /** The planet to display. */
  @Input() planet: Planet;
}
