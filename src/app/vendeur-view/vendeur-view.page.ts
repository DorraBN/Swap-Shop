import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-vendeur-view',
  templateUrl: './vendeur-view.page.html',
  styleUrls: ['./vendeur-view.page.scss'],
})
export class VendeurViewPage implements OnInit {

  
  color: any;
  password: any;
 
  id: number | undefined=1;
  imageUrl: string | ArrayBuffer | null='../../assets/m2.jpeg';
  title: string | undefined='Deux chaises';
  description: string | undefined='Some description here';
  rating: number = 4;
  category: string | undefined="meubles";
  
  generateRange(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
  constructor(private modalCtrl: ModalController ,private navParams: NavParams) { }
  productData: any;
  ngOnInit() {
    // Récupérer les données du vendeur passées depuis la page précédente
    this.productData = this.navParams.get('productData');
  }


}
