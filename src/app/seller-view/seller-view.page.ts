import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-seller-view',
  templateUrl: './seller-view.page.html',
  styleUrls: ['./seller-view.page.scss'],
})
export class SellerViewPage implements OnInit {

 
  color: any;
  password: any;
 
  id: number | undefined=1;
  imageUrl: string | ArrayBuffer | null='../../assets/m2.jpeg';
  title: string | undefined='Deux chaises';
  
  generateRange(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }
  sellerData: any;
  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
  constructor(private modalCtrl: ModalController ,private navParams: NavParams) { }
  
    ngOnInit() {
      // Récupérer les données du vendeur passées depuis la page précédente
      this.sellerData = this.navParams.get('sellerData');
    }

}
