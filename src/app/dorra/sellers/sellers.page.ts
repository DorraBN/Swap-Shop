import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import Swiper from 'swiper';
import { AjouterProduitPage } from '../ajouter-produit/ajouter-produit.page';
import { ProductViewPage } from '../product-view/product-view.page';
import { ProductEditPage } from '../product-edit/product-edit.page';

import { AuthService } from 'src/routes/AuthService';
import { SellerViewPage } from '../seller-view/seller-view.page';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.page.html',
  styleUrls: ['./sellers.page.scss'],
})
export class SellersPage implements OnInit {
  swiperInitialized = false;
  searchTerm: string = ''; 
  userEmail!: string;
  sellers: any[] = []; 
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalCtrl: ModalController,

    private authService: AuthService
  ) { }
  
  filterCategories(event: any) {
    const searchTerm = event.target ? event.target.value.toLowerCase() : '';
    if (!searchTerm.trim()) {
      this.sellers = this.products;
    } else {
      this.sellers = this.sellers.filter(item =>
        item.username.toLowerCase().includes(searchTerm) || item.email.toLowerCase().includes(searchTerm)
      );
    }
  }
  
  
  ngOnInit() {
    this.userEmail = this.authService.getEmail();
    this.getUserInfo();
  }
  
  getUserInfo() {
    this.authService.getSellers().subscribe(
      (response: any[]) => {
        this.sellers = response; 
      },
      (error) => {
        console.error('Erreur lors de la récupération des vendeurs', error);
      }
    );
  }
  
  
  products: any[] = [ ];

  deleteCategory() {
  
  }

  delete() {
  
  }

  goback1() {
    this.router.navigate(['/filter']);
  }

  deleteSeller(sellerEmail: string) {
    this.authService.deleteSellerByEmail(sellerEmail).subscribe(
      () => {
      
        this.getUserInfo();
      },
      (error) => {
        console.error('Erreur lors de la suppression du vendeur', error);
       
      }
    );
}
async view(seller: any) {
  const modal = await this.modalCtrl.create({
    component: SellerViewPage,
    componentProps: {
      sellerData: seller
    }
  });

  modal.present();

  const { data, role } = await modal.onWillDismiss();

  if (role === 'confirm') {
    // Logique de confirmation si nécessaire
  }
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

    const swiper = new Swiper('.swiper-container', swiperOptions);
    this.swiperInitialized = true;
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AjouterProduitPage,
      componentProps: { }
    });

    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') { }
  }

  ajouter() {
  
  }
  


  async Edit() {
   
  }

  gotoadd() {
    this.router.navigate(['/ajouter-produit']);
  }
}
