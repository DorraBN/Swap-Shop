import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewVentePageRoutingModule } from './view-vente-routing.module';

import { ViewVentePage } from './view-vente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewVentePageRoutingModule
  ],
  declarations: [ViewVentePage]
})
export class ViewVentePageModule {}
