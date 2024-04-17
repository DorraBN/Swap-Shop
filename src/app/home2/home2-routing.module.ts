import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD

import { Home2Page } from './home2.page';
=======
import { DetailPage } from '../detail/detail.page'; // Importez correctement la page de détail

import { Home2Page } from './home2.page';
import { HomePage } from '../home/home.page';
import { SigninPage } from '../signin/signin.page';
import { NavPage } from '../nav/nav.page';
>>>>>>> 8353bd8d1aa4e4bdd0908bae58d0f76050c62ef4

const routes: Routes = [
  {
    path: '',
    component: Home2Page
<<<<<<< HEAD
=======
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
    path: 'nav',
    component: NavPage
  },
  {
    path: 'detail',
    component: DetailPage
>>>>>>> 8353bd8d1aa4e4bdd0908bae58d0f76050c62ef4
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Home2PageRoutingModule {}
