import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeublesPageRoutingModule } from './meubles-routing.module';

import { MeublesPage } from './meubles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeublesPageRoutingModule
  ],
  declarations: [MeublesPage]
})
export class MeublesPageModule {}
