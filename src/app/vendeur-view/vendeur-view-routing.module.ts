import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendeurViewPage } from './vendeur-view.page';

const routes: Routes = [
  {
    path: '',
    component: VendeurViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendeurViewPageRoutingModule {}
