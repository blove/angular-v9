import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Person, PlanetService } from '../../../../core';

@Component({
  templateUrl: './person-home-planet-dialog.component.html',
  styleUrls: ['./person-home-planet-dialog.component.scss']
})
export class PersonHomePlanetDialogComponent {
  /** The home planet for the person. */
  planet = this.planetService.getPlanetForPerson(this.data.person);

  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly data: { person: Person },
    private readonly planetService: PlanetService
  ) {}
}
