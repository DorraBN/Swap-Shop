import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, MenuController, IonModal, ModalController } from '@ionic/angular';
import { AjouterVendeurPage } from '../ajouter-vendeur/ajouter-vendeur.page';
import { EditVendeurPage } from '../edit-vendeur/edit-vendeur.page';
import { ViewVendeurPage } from '../view-vendeur/view-vendeur.page';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  
  

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
  cards: any[] = [
    { 
      title: 'Card 1', 
      email: 'example1@example.com', 
      location: 'Location 1', 
      image: 'https://ionicframework.com/docs/img/demos/card-media.png' 
    },
    { 
      title: 'Card 2', 
      email: 'example2@example.com', 
      location: 'Location 2', 
      image: 'https://ionicframework.com/docs/img/demos/card-media.png' 
    },
    { 
      title: 'Card 3', 
      email: 'example3@example.com', 
      location: 'Location 3', 
      image: 'https://ionicframework.com/docs/img/demos/card-media.png' 
    },
    { 
      title: 'Card 4', 
      email: 'example4@example.com', 
      location: 'Location 4', 
      image: 'https://ionicframework.com/docs/img/demos/card-media.png' 
    }
  ];
 

  action1() {
    console.log('Action 1 clicked');
    // Add your logic for action 1 here
  }


  constructor(private menu: MenuController, private router: Router,private actionSheetCtrl: ActionSheetController,private modalCtrl: ModalController) { }
  
 
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
      component: ViewVendeurPage,
      componentProps: {
        
      }
    });
  
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
    }

  }
  async Edit(){
    
    const modal = await this.modalCtrl.create({
      component: EditVendeurPage,
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
      text: 'Edit',
      role:'destructive',
      handler:()  => {
        this.Edit();
      }
      
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
}