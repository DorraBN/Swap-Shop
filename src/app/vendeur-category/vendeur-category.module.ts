import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendeurCategoryPageRoutingModule } from './vendeur-category-routing.module';

import { VendeurCategoryPage } from './vendeur-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendeurCategoryPageRoutingModule
  ],
  declarations: [VendeurCategoryPage]
})
export class VendeurCategoryPageModule {}
