import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../../material';
import { SharedModule } from '../../shared';
import { IndexComponent } from './containers/index/index.component';
import { PersonFilmsDialogComponent } from './dialogs/person-films-dialog/person-films-dialog.component';
import { PersonHomePlanetDialogComponent } from './dialogs/person-home-planet-dialog/person-home-planet-dialog.component';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleListComponent } from './presenters/people-list/people-list.component';
import { PersonDetailsComponent } from './presenters/person-details/person-details.component';
import { PersonFilmsComponent } from './presenters/person-films/person-films.component';
import { PersonSearchFormComponent } from './presenters/person-search-form/person-search-form.component';
import { PlanetComponent } from './presenters/planet/planet.component';

@NgModule({
  declarations: [
    IndexComponent,
    PeopleListComponent,
    PersonDetailsComponent,
    PersonFilmsComponent,
    PersonFilmsDialogComponent,
    PersonHomePlanetDialogComponent,
    PersonSearchFormComponent,
    PlanetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    PeopleRoutingModule,
    SharedModule
  ]
})
export class PeopleModule {}
