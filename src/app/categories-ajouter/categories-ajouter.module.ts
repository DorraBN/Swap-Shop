import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesAjouterPageRoutingModule } from './categories-ajouter-routing.module';

import { CategoriesAjouterPage } from './categories-ajouter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriesAjouterPageRoutingModule
  ],
  declarations: [CategoriesAjouterPage]
})
export class CategoriesAjouterPageModule {}
