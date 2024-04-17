import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { SigninPage } from '../signin/signin.page';
import { DetailPage } from '../detail/detail.page';
import { Home2Page } from '../home2/home2.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'home2',
    component: Home2Page
  },
  {
    path: 'signin',
    component: SigninPage
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
export class HomePageRoutingModule {}



