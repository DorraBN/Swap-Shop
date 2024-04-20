import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPage } from './detail.page';
import { Home2Page } from '../home2/home2.page';
import { InfoPage } from '../info/info.page';
import { FilterPage } from '../filter/filter.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPage
  },
  {
    path: 'info',
    component: InfoPage
  },
  {
    path: 'home2',
    component: Home2Page
  },
  {
    path: 'filter',
    component: FilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPageRoutingModule {}
