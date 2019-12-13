import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

import { Person } from '../../../../core/models';
import { FilmService } from '../../../../core/services';

@Component({
  templateUrl: './person-films-dialog.component.html',
  styleUrls: ['./person-films-dialog.component.scss']
})
export class PersonFilmsDialogComponent {
  /** The films for the person. */
  films = this.filmService.getFilmsByCharacter(this.data.person);

  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly data: { person: Person },
    private readonly filmService: FilmService
  ) {}
}
