import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendeurVentesPage } from './vendeur-ventes.page';

const routes: Routes = [
  {
    path: '',
    component: VendeurVentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendeurVentesPageRoutingModule {}
