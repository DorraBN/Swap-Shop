import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewVendeurPageRoutingModule } from './view-vendeur-routing.module';

import { ViewVendeurPage } from './view-vendeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewVendeurPageRoutingModule
  ],
  declarations: [ViewVendeurPage]
})
export class ViewVendeurPageModule {}
