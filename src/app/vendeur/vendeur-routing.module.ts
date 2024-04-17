import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendeurPage } from './vendeur.page';

const routes: Routes = [
  {
    path: '',
    component: VendeurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendeurPageRoutingModule {}
