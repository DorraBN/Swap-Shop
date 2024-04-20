import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendeurprofilePage } from './vendeurprofile.page';

const routes: Routes = [
  {
    path: '',
    component: VendeurprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendeurprofilePageRoutingModule {}
