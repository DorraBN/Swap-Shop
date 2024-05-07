import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; // Importez ActivatedRoute
import { ModalController } from '@ionic/angular';
import Swiper from 'swiper';
import { AjouterProduitPage } from '../ajouter-produit/ajouter-produit.page';
import { ProductViewPage } from '../product-view/product-view.page';
import { ProductEditPage } from '../product-edit/product-edit.page';
import { AuthService } from 'src/routes/AuthService';
@Component({
  selector: 'app-vetements',
  templateUrl: './vetements.page.html',
  styleUrls: ['./vetements.page.scss'],
})
export class VetementsPage implements OnInit {


  filteredProducts: any[] = [];
  swiperInitialized = false;
  searchTerm: string = '';
  userEmail!: string;
  userProducts: any[] = [];
  produits: any[] = [];
  isLiked: boolean = false;

  like(product: any) {
    console.log('Produit aimé :', product);
    this.isLiked = !this.isLiked; // Inverser l'état du like
    this.authService.addToFavorites(product).subscribe(
      (response) => {
        console.log('Produit ajouté aux favoris avec succès', response);
        // Ajoutez ici le code pour mettre à jour l'état du produit ou toute autre logique nécessaire
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du produit aux favoris', error);
        // Ajoutez ici la gestion des erreurs si nécessaire
      }
    );
  }
  ngOnInit() {
    this.authService.getVetements().subscribe(
      (products: any[]) => {
        this.produits = products;
      },
      (error) => {
        console.error('Erreur lors de la récupération des produits', error);
      }
    );
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
  
 
  gotoadd()
{
  this.router.navigate(['/ajouter-produit']);
}


buy(){
  
}
}