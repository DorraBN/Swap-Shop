import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewVendeurPage } from './view-vendeur.page';

const routes: Routes = [
  {
    path: '',
    component: ViewVendeurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewVendeurPageRoutingModule {}
