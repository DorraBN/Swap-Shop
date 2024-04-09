import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupPage } from './signup.page';
import { Home2Page } from '../home2/home2.page';
import { SigninPage } from '../signin/signin.page';
import { DetailPage } from '../detail/detail.page';

const routes: Routes = [
  {
    path: '',
    component: SignupPage
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
export class SignupPageRoutingModule {}
