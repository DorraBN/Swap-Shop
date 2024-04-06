import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeublesComponent } from './meubles.component';

@NgModule({
  declarations: [MeublesComponent],
  imports: [
    CommonModule,
    IonicModule // Importez IonicModule ici
  ],
  exports: [MeublesComponent]
})
export class MeublesModule { }
