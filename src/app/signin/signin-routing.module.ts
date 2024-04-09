import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninPage } from './signin.page';
import { DetailPage } from '../detail/detail.page';
import { Home2Page } from '../home2/home2.page';
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
    path: '',
    component: SigninPage
  },
  {
    path: 'home2',
    component: Home2Page
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'detail',
    component: DetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninPageRoutingModule {}
