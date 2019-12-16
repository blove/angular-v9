import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'mos-eisley',
    loadChildren: () =>
      import('./features/mos-eisley/mos-eisley.module').then(
        ({ MosEisleyModule }) => MosEisleyModule
      )
  },
  {
    path: 'people',
    loadChildren: () =>
      import('./features/people/people.module').then(
        ({ PeopleModule }) => PeopleModule
      )
  },
  {
    path: 'recon',
    loadChildren: () =>
      import('./features/recon/recon.module').then(
        ({ ReconModule }) => ReconModule
      )
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
