import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-vendeurprofile',
  templateUrl: './vendeurprofile.page.html',
  styleUrls: ['./vendeurprofile.page.scss'],
})
export class VendeurprofilePage implements OnInit {
  constructor(private menu: MenuController,private router: Router) { }
  
  ngOnInit() {}

  toggleMenu() {
    this.menu.toggle();
  }
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
