import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendeurPageRoutingModule } from './vendeur-routing.module';

import { VendeurPage } from './vendeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendeurPageRoutingModule
  ],
  declarations: [VendeurPage]
})
export class VendeurPageModule {}
