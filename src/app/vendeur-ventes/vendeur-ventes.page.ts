import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-vendeur-ventes',
  templateUrl: './vendeur-ventes.page.html',
  styleUrls: ['./vendeur-ventes.page.scss'],
})
export class VendeurVentesPage implements OnInit {

  tableData: any[] = [
    { email: 'john@example.com', category: 'Clothing', itemName: 'T-Shirt', price: '$20', sales: 50 },
    { email: 'jane@example.com', category: 'Electronics', itemName: 'Smartphone', price: '$500', sales: 100 },
    { email: 'john@example.com', category: 'Clothing', itemName: 'T-Shirt', price: '$20', sales: 50 },
    { email: 'jane@example.com', category: 'Electronics', itemName: 'Smartphone', price: '$500', sales: 100 }
    
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
  toggleMenu() {
    this.menu.toggle();
  }

  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
