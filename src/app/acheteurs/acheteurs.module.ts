import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcheteursPageRoutingModule } from './acheteurs-routing.module';

import { AcheteursPage } from './acheteurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcheteursPageRoutingModule
  ],
  declarations: [AcheteursPage]
})
export class AcheteursPageModule {}
