import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendeurprofilePageRoutingModule } from './vendeurprofile-routing.module';

import { VendeurprofilePage } from './vendeurprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendeurprofilePageRoutingModule
  ],
  declarations: [VendeurprofilePage]
})
export class VendeurprofilePageModule {}
