import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-vendeur',
  templateUrl: './vendeur.page.html',
  styleUrls: ['./vendeur.page.scss'],
})
export class VendeurPage implements OnInit {

 
constructor(private menu: MenuController, private router: Router) { }

ngOnInit() {}

toggleMenu() {
  this.menu.toggle();
}

sidebarOpen = false;

toggleSidebar() {
  this.sidebarOpen = !this.sidebarOpen;
}

}
