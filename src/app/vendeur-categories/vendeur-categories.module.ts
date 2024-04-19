import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendeurCategoriesPageRoutingModule } from './vendeur-categories-routing.module';

import { VendeurCategoriesPage } from './vendeur-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendeurCategoriesPageRoutingModule
  ],
  declarations: [VendeurCategoriesPage]
})
export class VendeurCategoriesPageModule {}
