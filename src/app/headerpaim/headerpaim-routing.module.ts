import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderpaimPage } from './headerpaim.page';

const routes: Routes = [
  {
    path: '',
    component: HeaderpaimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderpaimPageRoutingModule {}
