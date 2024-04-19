import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterVendeurPage } from './ajouter-vendeur.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterVendeurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterVendeurPageRoutingModule {}
