import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { VendeurViewPage } from 'src/app/vendeur-view/vendeur-view.page';
import { AuthService } from 'src/routes/AuthService';

@Component({
  selector: 'app-vendeurs',
  templateUrl: './vendeurs.page.html',
  styleUrls: ['./vendeurs.page.scss'],
})
export class VendeursPage implements OnInit {
  sellers: any[] = [];
  sellerPairs: any[] = [];


  constructor(private authService: AuthService, private router: Router,
    public alertController: AlertController,private modalCtrl: ModalController,) { }

  ngOnInit(): void {
    this.getSellers();
  }

  async viewSeller(seller: any) {
    const modal = await this.modalCtrl.create({
      component: VendeurViewPage,
      componentProps: {
        productData: seller
      }
    });
  
    modal.present();
  
    const { data, role } = await modal.onWillDismiss();
  
    if (role === 'confirm') {
      // Logique de confirmation si nécessaire
    }
  }

  getSellers(): void {
    this.authService.getSellers().subscribe(
      (data) => {
        this.sellers = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des vendeurs', error);
      }
    );
  }

 

  async openHelpDialog() {
    const alert = await this.alertController.create({
      header: 'Détails',
      message: `
        <div class="details">
          <img src="../../../assets/p1.jpeg" alt="" class="im7">
          <h2>Nom & Prénom</h2>
          <h4>Profession</h4>
          <h4>Numéro de téléphone</h4>
          <h4>Catégorie de produit</h4>
        </div>
      `,
      buttons: ['OK']
    });

    await alert.present();
  }

  add() {
    this.router.navigate(['/ajoutervendeur']);
  }

  pro() {
    this.router.navigate(['/adminprofile']);
  }

  // Fonction pour diviser un tableau en sous-tableaux de taille donnée
  chunkArray(array: any[], size: number): any[] {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  }
  
}
