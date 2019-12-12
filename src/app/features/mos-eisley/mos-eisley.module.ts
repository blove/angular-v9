import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MosEisleyRoutingModule } from './mos-eisley-routing.module';
import { CantinaComponent } from './containers/cantina/cantina.component';
import { MaterialModule } from 'src/app/material';
import { SharedModule } from 'src/app/shared';

@NgModule({
  declarations: [CantinaComponent],
  imports: [CommonModule, MaterialModule, MosEisleyRoutingModule, SharedModule]
})
export class MosEisleyModule {}
