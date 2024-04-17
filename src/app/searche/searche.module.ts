import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchePageRoutingModule } from './searche-routing.module';

import { SearchePage } from './searche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchePageRoutingModule
  ],
  declarations: [SearchePage]
})
export class SearchePageModule {}
