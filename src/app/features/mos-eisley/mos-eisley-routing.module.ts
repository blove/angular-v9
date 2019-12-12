import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CantinaComponent } from './containers/cantina/cantina.component';

const routes: Routes = [
  {
    path: 'cantina',
    component: CantinaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MosEisleyRoutingModule {}
