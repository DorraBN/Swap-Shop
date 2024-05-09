import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; // Importez ActivatedRoute
import { ModalController } from '@ionic/angular';
import Swiper from 'swiper';
import { AjouterProduitPage } from '../../ajouter-produit/ajouter-produit.page';

import { ProductEditPage } from '../../product-edit/product-edit.page';
import { AuthService } from 'src/routes/AuthService';
import { ProductViewPage } from '../product-view/product-view.page';


@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.page.html',
  styleUrls: ['./category-view.page.scss'],
})
export class CategoryViewPage implements OnInit {
  produits: any[] = [];
  filteredProducts: any[] = [];
  swiperInitialized = false;
  searchTerm: string = '';
  userEmail!: string;
  userProducts: any[] = [];

  profileImageURL: string = '';
  
  ngOnInit() {
   
    const userEmail = this.authService.getUserEmail();
    if (userEmail) {
      this.authService.getProduits().subscribe(
        (products: any[]) => {
          this.userProducts = products.filter(product => product.email === userEmail);
          this.filteredProducts = [...this.userProducts];
        },
        (error) => {
          console.error('Erreur lors de la récupération des produits', error);
        }
      );
    }
  }
  constructor(
    private router: Router,
    private route: ActivatedRoute, // Injectez ActivatedRoute
    private modalCtrl: ModalController,
 private authService:AuthService
  ) {
    this.filteredproduct = this.products;
  }

  filterCategories(event: any) {
    const searchTerm = event.target ? event.target.value.toLowerCase() : '';
    if (!searchTerm.trim()) {
      this.filteredproduct = this.products;
    } else {
      this.filteredproduct = this.products.filter(item =>
        item.title.toLowerCase().includes(searchTerm) 
      );
    }
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


  getUserInfo() {
    this.authService.getProduits().subscribe(
      (response: any[]) => {
        this.produits = response; 
      },
      (error) => {
        console.error('Erreur lors de la récupération des vendeurs', error);
      }
    );
  }


  goback1(){
    this.router.navigate(['/filter']);
  }
  

  ngAfterViewInit() {
   
    const swiperOptions = {
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
  

 onDeleteProduct(productName: string): void {
  this.authService.deleteProductByName(productName).subscribe(
    () => {
      console.log('Produit supprimé avec succès.');
      
      window.location.reload();
    },
    error => {
      console.error('Erreur lors de la suppression du produit :', error);
  
    }
  );
}

  async view(product: any) {
    const modal = await this.modalCtrl.create({
      component: ProductViewPage,
      componentProps: {
        productData: product
      }
    });
  
    modal.present();
  
    const { data, role } = await modal.onWillDismiss();
  
    if (role === 'confirm') {
      // Logique de confirmation si nécessaire
    }
  }

  async edit(product: any) {
    const modal = await this.modalCtrl.create({
      component: ProductEditPage,
      componentProps: {
        productData: product
      }
    });
  
    modal.present();
  
    const { data, role } = await modal.onWillDismiss();
  
    if (role === 'confirm') {
      // Logique de confirmation si nécessaire
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
  gotoadd()
{
  this.router.navigate(['/ajouter-produit']);
}

}
