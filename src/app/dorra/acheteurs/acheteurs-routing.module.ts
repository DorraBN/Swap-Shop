import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcheteursPage } from './acheteurs.page';

const routes: Routes = [
  {
    path: '',
    component: AcheteursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcheteursPageRoutingModule {}
