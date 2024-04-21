import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import Swiper from 'swiper';
import { AjouterProduitPage } from '../ajouter-produit/ajouter-produit.page';
import { ProductEditPage } from '../product-edit/product-edit.page';
import { ProductViewPage } from '../product-view/product-view.page';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.page.html',
  styleUrls: ['./category-view.page.scss'],
})
export class CategoryViewPage implements OnInit {

  swiperInitialized = false;
  searchTerm: string = ''; 
  

  constructor(private router: Router,private modalCtrl: ModalController) {
    this.filteredproduct = this.products;
  }

  filterCategories(event: any) {
    const searchTerm = event.target ? event.target.value.toLowerCase() : '';
    if (!searchTerm.trim()) { // If search term is empty, show all data
      this.filteredproduct = this.products;
    } else {
      // Filter data based on search term
      this.filteredproduct = this.products.filter(item =>
        item.title.toLowerCase().includes(searchTerm) 
      );
    }
  }
  
  ngOnInit(): void {
    
  }
  generateRange(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }
  products:any[ ]= [
    { id:1,image: '../../assets/m2.jpeg', title: 'Deux chaises', description: 'Some description here', rating: 4 },
    { id:2,image: '../../assets/m3.jpeg', title: 'Armoire', description: 'Some description here', rating: 4 },
    {id:3, image: '../../assets/m.jpeg', title: 'Armoire', description: 'Some description here', rating: 5 },
    { id:4,image: '../../assets/m1.jpg', title: 'trois chaises', description: 'Some description here', rating: 3 },
    { id:6,image: '../../assets/m4.jpeg', title: 'Matla', description: 'Some description here', rating: 2 },
    { id:7,image: '../../assets/m5.jpeg', title: 'Bureau', description: 'Some description here', rating: 5 },
    { id:5,image: '../../assets/m6.jpeg', title: 'Canapé', description: 'Some description here', rating: 4 },
    { id:8,image: '../../assets/m7.jpeg', title: 'Canapé', description: 'Some description here', rating: 4 },
  ];
  filteredproduct: any[]; 
  goback() {
    this.router.navigate(['/vendeur-main-page']);
  }
  
  deleteCategory(){
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
            this.delete();
            // Perform deletion logic here
          },
        },
      ];
      document.body.appendChild(alert);
      return alert.present();
  }
  
  delete() {
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





  goback1(){
    this.router.navigate(['/filter']);
  }
  

  ngAfterViewInit() {
    // Définition des options de swiper
    const swiperOptions = {
      // Ajoutez vos options ici
      // Par exemple:
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    };

    // Initialiser swiper une fois que la vue est initialisée
    const swiper = new Swiper('.swiper-container', swiperOptions);
    this.swiperInitialized = true;
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AjouterProduitPage,
      componentProps: {
        
      }
    });
  
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
    }
  }
  ajouter(){
    
  }
  
  async view(){

    const modal = await this.modalCtrl.create({
      component: ProductViewPage,
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
      component: ProductEditPage,
      componentProps: {
        
      }
    });
  
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
    }

  }
}
