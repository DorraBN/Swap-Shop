import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashvPageRoutingModule } from './dashv-routing.module';

import { DashvPage } from './dashv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashvPageRoutingModule
  ],
  declarations: [DashvPage]
})
export class DashvPageModule {}
