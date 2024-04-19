import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditVendeurPageRoutingModule } from './edit-vendeur-routing.module';

import { EditVendeurPage } from './edit-vendeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditVendeurPageRoutingModule
  ],
  declarations: [EditVendeurPage]
})
export class EditVendeurPageModule {}
