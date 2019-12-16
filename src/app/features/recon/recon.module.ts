import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material';
import { SharedModule } from 'src/app/shared';

import { ReconRoutingModule } from './recon-routing.module';
import { StormtroopersComponent } from './stormtroopers/stormtroopers.component';

@NgModule({
  declarations: [StormtroopersComponent],
  imports: [CommonModule, MaterialModule, ReconRoutingModule, SharedModule]
})
export class ReconModule {}
