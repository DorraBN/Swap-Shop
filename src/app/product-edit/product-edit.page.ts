import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.page.html',
  styleUrls: ['./product-edit.page.scss'],
})
export class ProductEditPage implements OnInit {


  color: any;
  password: any;
 
  id: number | undefined=1;
  imageUrl: string | ArrayBuffer | null='../../assets/m2.jpeg';
  title: string | undefined='Deux chaises';
  description: string | undefined='Some description here';
  rating: number = 4;
  category: string | undefined="meubles";
  
 
  constructor(private navParams: NavParams,router:Router,private modalCtrl: ModalController,private http: HttpClient) { }
  
  productData: any;
  ngOnInit() {
    // Récupérer les données du vendeur passées depuis la page précédente
    this.productData = this.navParams.get('productData');
  }

 
  product: any = { id: 1, image: '../../assets/m2.jpeg', title: 'Deux chaises', description: 'Some description here', rating: 4 };
 
  generateRange(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }



  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    
    const formData = {
      title: this.title,
      description: this.description,
      rating: this.rating,
      color: this.color,
      category: this.category,
      imageUrl: this.imageUrl,
    };
    this.modalCtrl.dismiss(formData, 'confirm');
  }

  previewImage(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
  setRating(value: number) {
    this.rating = value;
  }
  
 
  
  FileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLElement;
    fileInput.click();
  }

  updateProduct() {
    if (!this.productData || !this.productData.nom) {
      console.error('Impossible de mettre à jour le produit car le nom est manquant');
      return;
    }

    const updatedProduct = {
      description: this.productData.description,
      price: this.productData.price,
      quantity: this.productData.quantity,
      color: this.productData.color,
      brand: this.productData.brand,
      // Ajoutez d'autres propriétés si nécessaire
    };

    // Recherche du produit par son nom
    this.http.get<any>('http://localhost:3000/produits/' + this.productData.nom)
      .subscribe(product => {
        if (product) {
          // Mise à jour des autres informations du produit
          this.http.put('http://localhost:3000/produits/' + product.id, updatedProduct)
            .subscribe(response => {
              console.log('Produit mis à jour avec succès', response);
              // Ajoutez ici toute logique supplémentaire après la mise à jour du produit
            }, error => {
              console.error('Erreur lors de la mise à jour du produit', error);
              // Ajoutez ici toute logique pour gérer les erreurs
            });
        } else {
          console.error('Le produit avec le nom spécifié n\'a pas été trouvé');
          // Ajoutez ici toute logique pour gérer le cas où le produit n'est pas trouvé
        }
      }, error => {
        console.error('Erreur lors de la recherche du produit', error);
        // Ajoutez ici toute logique pour gérer les erreurs de recherche du produit
      });
  }
}