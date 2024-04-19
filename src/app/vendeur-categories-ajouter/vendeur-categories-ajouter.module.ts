import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendeurCategoriesAjouterPageRoutingModule } from './vendeur-categories-ajouter-routing.module';

import { VendeurCategoriesAjouterPage } from './vendeur-categories-ajouter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendeurCategoriesAjouterPageRoutingModule
  ],
  declarations: [VendeurCategoriesAjouterPage]
})
export class VendeurCategoriesAjouterPageModule {}
