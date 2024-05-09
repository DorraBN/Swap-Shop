import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcheteurViewPage } from './acheteur-view.page';

const routes: Routes = [
  {
    path: '',
    component: AcheteurViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcheteurViewPageRoutingModule {}
