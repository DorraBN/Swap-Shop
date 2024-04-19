import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendeurCategoriesAjouterPage } from './vendeur-categories-ajouter.page';

const routes: Routes = [
  {
    path: '',
    component: VendeurCategoriesAjouterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendeurCategoriesAjouterPageRoutingModule {}
