import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-admin-main-page',
  templateUrl: './admin-main-page.page.html',
  styleUrls: ['./admin-main-page.page.scss'],
})
export class AdminMainPagePage implements OnInit {

 
  tableData = [
    { id: 1, email: 'seller1@example.com', localisation: 'Paris', ventestotales: 20 },
    { id: 2, email: 'seller2@example.com', localisation: 'New York', ventestotales: 15 },
    { id: 3, email: 'seller3@example.com', localisation: 'London', ventestotales: 10 },
    { id: 4, email: 'seller4@example.com', localisation: 'Tokyo', ventestotales: 25 },
    // Add more seller data as needed
  ];
  
  
  constructor(private menu: MenuController, private router: Router) { }
  
 
  goToHome2() {
    this.router.navigate(['/home2']); // Assurez-vous que '/home2' correspond au chemin vers votre page "home2"
  }

  ngOnInit() {}

  ajouter(){
    this.router.navigate(['/ajoutervendeur']);
  }

  Delete(){
    
  }
  Edit(){}

  toggleMenu() {
    this.menu.toggle();
  }

  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
