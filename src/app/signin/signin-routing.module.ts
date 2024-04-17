import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninPage } from './signin.page';
<<<<<<< HEAD
=======
import { DetailPage } from '../detail/detail.page';
import { Home2Page } from '../home2/home2.page';
import { HomePage } from '../home/home.page';
>>>>>>> 8353bd8d1aa4e4bdd0908bae58d0f76050c62ef4

const routes: Routes = [
  {
    path: '',
    component: SigninPage
<<<<<<< HEAD
=======
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
>>>>>>> 8353bd8d1aa4e4bdd0908bae58d0f76050c62ef4
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninPageRoutingModule {}
