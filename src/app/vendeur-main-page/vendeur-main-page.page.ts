import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-vendeur-main-page',
  templateUrl: './vendeur-main-page.page.html',
  styleUrls: ['./vendeur-main-page.page.scss'],
})
export class VendeurMainPagePage implements OnInit {

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
