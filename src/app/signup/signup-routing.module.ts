import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupPage } from './signup.page';
<<<<<<< HEAD
=======
import { Home2Page } from '../home2/home2.page';
import { SigninPage } from '../signin/signin.page';
import { DetailPage } from '../detail/detail.page';
>>>>>>> 8353bd8d1aa4e4bdd0908bae58d0f76050c62ef4

const routes: Routes = [
  {
    path: '',
    component: SignupPage
<<<<<<< HEAD
=======
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
>>>>>>> 8353bd8d1aa4e4bdd0908bae58d0f76050c62ef4
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupPageRoutingModule {}
