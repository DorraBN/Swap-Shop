import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendeurMainPagePage } from './vendeur-main-page.page';

const routes: Routes = [
  {
    path: '',
    component: VendeurMainPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendeurMainPagePageRoutingModule {}
