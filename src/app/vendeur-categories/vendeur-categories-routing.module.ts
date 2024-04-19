import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendeurCategoriesPage } from './vendeur-categories.page';

const routes: Routes = [
  {
    path: '',
    component: VendeurCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendeurCategoriesPageRoutingModule {}
