import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesAjouterPage } from './categories-ajouter.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriesAjouterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesAjouterPageRoutingModule {}
