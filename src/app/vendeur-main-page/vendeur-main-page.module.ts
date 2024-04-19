import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendeurMainPagePageRoutingModule } from './vendeur-main-page-routing.module';

import { VendeurMainPagePage } from './vendeur-main-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendeurMainPagePageRoutingModule
  ],
  declarations: [VendeurMainPagePage]
})
export class VendeurMainPagePageModule {}
