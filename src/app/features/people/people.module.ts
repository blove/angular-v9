import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IndexComponent } from './containers/index/index.component';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleListComponent } from './presenters/people-list/people-list.component';
import { MaterialModule } from '../../material';
import { SharedModule } from '../../shared';
import { PersonDetailsComponent } from './presenters/person-details/person-details.component';
import { PersonFilmsComponent } from './presenters/person-films/person-films.component';

@NgModule({
  declarations: [IndexComponent, PeopleListComponent, PersonDetailsComponent, PersonFilmsComponent],
  imports: [CommonModule, MaterialModule, PeopleRoutingModule, SharedModule]
})
export class PeopleModule {}
