import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Home2PageRoutingModule } from './home2-routing.module';

import { Home2Page } from './home2.page';
<<<<<<< HEAD
=======
import { NavPage } from '../nav/nav.page';
>>>>>>> 8353bd8d1aa4e4bdd0908bae58d0f76050c62ef4

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Home2PageRoutingModule
  ],
<<<<<<< HEAD
  declarations: [Home2Page]
=======
  declarations: [Home2Page,NavPage]
>>>>>>> 8353bd8d1aa4e4bdd0908bae58d0f76050c62ef4
})
export class Home2PageModule {}
