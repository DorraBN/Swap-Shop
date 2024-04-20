import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashvPage } from './dashv.page';

const routes: Routes = [
  {
    path: '',
    component: DashvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashvPageRoutingModule {}
