import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-vendeur-categories',
  templateUrl: './vendeur-categories.page.html',
  styleUrls: ['./vendeur-categories.page.scss'],
})
export class VendeurCategoriesPage implements OnInit {

  
  constructor(private menu: MenuController, private router: Router) { }
  
 
  goToHome2() {
    this.router.navigate(['/home2']); // Assurez-vous que '/home2' correspond au chemin vers votre page "home2"
  }

  ngOnInit() {}

  ajouter(){
    this.router.navigate(['/vendeur-categories-ajouter']);
  }
  detail(){
    this.router.navigate(['/category-view']);
  }

  toggleMenu() {
    this.menu.toggle();
  }  goback() {
    this.router.navigate(['/vendeur-main-page']);
  }

  filteredCategories: any[] = [
    { id: 2, name: 'meubles' },
    { id: 9, name: 'Livres' },
    { id: 14, name: 'Vetements' },
    { id: 20, name: 'apareils electro-menagers' },
    { id: 15, name: 'fournitures sco-laires' },
    { id: 17, name: 'apareils electroniques' },
    { id: 12, name: 'Équipement sportif et de plein air' },
    { id: 11, name: 'équipement de bricolage' },
    { id: 10, name: 'Instruments de musique' }];
  searchTerm: string = ''; // Variable to store the search term
  sidebarOpen: boolean = false; // Variable to control sidebar open/close state

  categories: any[] = [
    { id: 2, name: 'meubles' },
    { id: 9, name: 'Livres' },
    { id: 14, name: 'Vetements' },
    { id: 20, name: 'apareils electro-menagers' },
    { id: 15, name: 'fournitures sco-laires' },
    { id: 17, name: 'apareils electroniques' },
    { id: 12, name: 'Équipement sportif et de plein air' },
    { id: 11, name: 'équipement de bricolage' },
    { id: 10, name: 'Instruments de musique' }
  ];

  filterCategories(event: any) {
    const searchTerm = event.target.value;
    if (!this.searchTerm) {
      this.filteredCategories = this.categories;
      return;
    }
    this.filteredCategories = this.categories.filter(category =>
      category.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}