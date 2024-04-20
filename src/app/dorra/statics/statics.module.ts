import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaticsPageRoutingModule } from './statics-routing.module';

import { StaticsPage } from './statics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaticsPageRoutingModule
  ],
  declarations: [StaticsPage]
})
export class StaticsPageModule {}
