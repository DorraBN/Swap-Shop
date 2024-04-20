import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaticsPage } from './statics.page';

const routes: Routes = [
  {
    path: '',
    component: StaticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaticsPageRoutingModule {}
