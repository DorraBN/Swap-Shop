import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutervendeurPageRoutingModule } from './ajoutervendeur-routing.module';

import { AjoutervendeurPage } from './ajoutervendeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutervendeurPageRoutingModule
  ],
  declarations: [AjoutervendeurPage]
})
export class AjoutervendeurPageModule {}
