import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendeurVentesPageRoutingModule } from './vendeur-ventes-routing.module';

import { VendeurVentesPage } from './vendeur-ventes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendeurVentesPageRoutingModule
  ],
  declarations: [VendeurVentesPage]
})
export class VendeurVentesPageModule {}
