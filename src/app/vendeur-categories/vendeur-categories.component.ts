import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-vendeur-categories',
  templateUrl: './vendeur-categories.component.html',
  styleUrls: ['./vendeur-categories.component.scss'],
})
export class VendeurCategoriesComponent  implements OnInit {

  
  constructor(private menu: MenuController, private router: Router) { }
  
 
  goToHome2() {
    this.router.navigate(['/home2']); // Assurez-vous que '/home2' correspond au chemin vers votre page "home2"
  }

  ngOnInit() {}

  ajouter(){
    this.router.navigate(['/ajouter']);
  }

  toggleMenu() {
    this.menu.toggle();
  }

  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}