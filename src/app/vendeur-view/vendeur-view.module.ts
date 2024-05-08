import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendeurViewPageRoutingModule } from './vendeur-view-routing.module';

import { VendeurViewPage } from './vendeur-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendeurViewPageRoutingModule
  ],
  declarations: [VendeurViewPage]
})
export class VendeurViewPageModule {}
