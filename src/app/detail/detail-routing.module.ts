import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPage } from './detail.page';
import { Home2Page } from '../home2/home2.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPage
  },
  {
    path: 'home',
    component: Home2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPageRoutingModule {}
