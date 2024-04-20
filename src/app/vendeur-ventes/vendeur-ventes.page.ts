import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, MenuController, IonModal, ModalController } from '@ionic/angular';
import { AjouterVendeurPage } from '../ajouter-vendeur/ajouter-vendeur.page';
import { EditVendeurPage } from '../edit-vendeur/edit-vendeur.page';
import { ViewVendeurPage } from '../view-vendeur/view-vendeur.page';
import { ViewVentePage } from '../view-vente/view-vente.page';

@Component({
  selector: 'app-vendeur-ventes',
  templateUrl: './vendeur-ventes.page.html',
  styleUrls: ['./vendeur-ventes.page.scss'],
})
export class VendeurVentesPage implements OnInit {

  searchTerm: string = ''; // Variable to store the search term
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AjouterVendeurPage,
      componentProps: {
        
      }
    });
  
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
    }
  }
  
  tableData: any[] = [
    { email: 'john@example.com', category: 'Clothing', itemName: 'T-Shirt', price: '$20', id: 1 },
    { email: 'jane@example.com', category: 'Electronics', itemName: 'Smartphone', price: '$500',id : 2 },
    { email: 'john@example.com', category: 'Clothing', itemName: 'T-Shirt', price: '$20', id:4 },
    { email: 'jane@example.com', category: 'Electronics', itemName: 'Smartphone', price: '$500', id: 3 }
    
  ];
 

  action1() {
    console.log('Action 1 clicked');
    // Add your logic for action 1 here
  }


  constructor(private menu: MenuController, private router: Router,private actionSheetCtrl: ActionSheetController,private modalCtrl: ModalController) {
    this.filteredData = this.tableData;
   }
   filterCategories(event: any) {
    const searchTerm = event.target ? event.target.value.toLowerCase() : '';
    if (!searchTerm.trim()) { // If search term is empty, show all data
      this.filteredData = this.tableData;
    } else {
      // Filter data based on search term
      this.filteredData = this.tableData.filter(item =>
        item.category.toLowerCase().includes(searchTerm) ||
        item.itemName.toLowerCase().includes(searchTerm) ||
        item.id.toString().includes(searchTerm) ||
        item.email.toLowerCase().includes(searchTerm)
      );
    }
  }
  
 
  goToHome2() {
    this.router.navigate(['/home2']); 
  }

  ngOnInit() {}

  ajouter() {
  }

  Delete(){
    
  }

  async View(){

    const modal = await this.modalCtrl.create({
      component: ViewVentePage,
      componentProps: {
        
      }
    });
  
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
    }

  }
  


  toggleMenu() {
    this.menu.toggle();
  }

  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  
  isActionSheetOpen = false;
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
    handler: () => { // Add a handler for the delete action
      this.deleteItem(); // Call the method to handle deletion
    },
    },
    
      
    
    {
      text: 'View',
      role:'destructive',
      handler:()  => {
        this.View();
      }
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
  
  deleteItem() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Alert!';
    alert.message = 'Are you sure you want to delete?';
    alert.buttons = [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Delete canceled');
        },
      },
      {
        text: 'OK',
        role: 'confirm',
        handler: () => {
          console.log('Item deleted');
          // Perform deletion logic here
        },
      },
    ];
    document.body.appendChild(alert);
    return alert.present();
  }
  
  setOpen(isOpen: boolean) {
    this.isActionSheetOpen = isOpen;
  }

  filteredData: any[]; // Variable to store the filtered data

  
}
