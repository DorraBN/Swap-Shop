import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterPage } from './filter.page';
import { DetailPage } from '../detail/detail.page';
import { InfoPage } from '../info/info.page';
import { Home2Page } from '../home2/home2.page';

const routes: Routes = [
  {
    path: '',
    component: FilterPage
  }, {
    path: 'detail',
    component: DetailPage
  },
  {
    path: 'info',
    component: InfoPage
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
export class FilterPageRoutingModule {}
