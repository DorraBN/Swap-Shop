import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';

@NgModule({
  declarations: [
    NavigationComponent
    // Other navigation-related components can be included here if needed
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationComponent
    // Export components if you plan to use them in other modules
  ]
})
export class NavigationModule { }
