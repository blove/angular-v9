import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../../../../material';
import { PersonSearchFormComponent } from './person-search-form.component';

@NgModule({
  declarations: [PersonSearchFormComponent],
  imports: [CommonModule, FormsModule, MaterialModule]
})
export class PersonSearchFormModule {}
