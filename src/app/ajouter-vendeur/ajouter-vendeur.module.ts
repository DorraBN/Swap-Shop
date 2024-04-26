import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterVendeurPageRoutingModule } from './ajouter-vendeur-routing.module';

import { AjouterVendeurPage } from './ajouter-vendeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterVendeurPageRoutingModule
  ],
  declarations: [AjouterVendeurPage]
})
export class AjouterVendeurPageModule {}
