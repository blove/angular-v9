import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Person } from '../../../../core';
import { PersonFilmsDialogComponent } from '../../dialogs/person-films-dialog/person-films-dialog.component';
import { PersonHomePlanetDialogComponent } from '../../dialogs/person-home-planet-dialog/person-home-planet-dialog.component';

@Component({
  selector: 'swr-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent {
  /** The people to display. */
  @Input() people: Person[];

  /** True if the content should be translated for Chewbaka */
  translateToWookiee = false;

  constructor(private readonly matDialog: MatDialog) {}

  onTranslate(): void {
    this.translateToWookiee = !this.translateToWookiee;
  }

  openFilmsDialogForPerson(person: Person): void {
    this.matDialog.open(PersonFilmsDialogComponent, {
      data: {
        person
      },
      width: '80%'
    });
  }

  openHomePlanetDialogForPerson(person: Person): void {
    this.matDialog.open(PersonHomePlanetDialogComponent, {
      data: {
        person
      },
      width: '80%'
    });
  }
}
