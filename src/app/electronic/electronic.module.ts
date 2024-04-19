import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectronicPageRoutingModule } from './electronic-routing.module';

import { ElectronicPage } from './electronic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectronicPageRoutingModule
  ],
  declarations: [ElectronicPage]
})
export class ElectronicPageModule {}
