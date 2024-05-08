import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcheteurViewPageRoutingModule } from './acheteur-view-routing.module';

import { AcheteurViewPage } from './acheteur-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcheteurViewPageRoutingModule
  ],
  declarations: [AcheteurViewPage]
})
export class AcheteurViewPageModule {}
