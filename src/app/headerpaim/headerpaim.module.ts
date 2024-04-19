import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderpaimPageRoutingModule } from './headerpaim-routing.module';

import { HeaderpaimPage } from './headerpaim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderpaimPageRoutingModule
  ],
  declarations: [HeaderpaimPage]
})
export class HeaderpaimPageModule {}
