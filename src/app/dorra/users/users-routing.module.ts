import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersPage } from './users.page';
import { VendeurprofilePage } from '../vendeurprofile/vendeurprofile.page';

const routes: Routes = [
  {
    path: '',
    component: UsersPage
  },
  {
    path: 'vendeurprofile',
    component:VendeurprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersPageRoutingModule {}
