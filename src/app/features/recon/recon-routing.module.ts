import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StormtroopersComponent } from './stormtroopers/stormtroopers.component';

const routes: Routes = [
  {
    path: '',
    component: StormtroopersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReconRoutingModule {}
