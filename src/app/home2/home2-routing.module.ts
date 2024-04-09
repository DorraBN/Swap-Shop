import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailPage } from '../detail/detail.page'; // Importez correctement la page de détail

import { Home2Page } from './home2.page';
import { HomePage } from '../home/home.page';
import { SigninPage } from '../signin/signin.page';

const routes: Routes = [
  {
    path: '',
    component: Home2Page
  },
  {
    path: 'home',
    component: HomePage
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
export class Home2PageRoutingModule {}
