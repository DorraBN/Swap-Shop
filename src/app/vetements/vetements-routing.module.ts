import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VetementsPage } from './vetements.page';

const routes: Routes = [
  {
    path: '',
    component: VetementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VetementsPageRoutingModule {}
