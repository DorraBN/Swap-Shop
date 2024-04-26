import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.page.html',
  styleUrls: ['./product-view.page.scss'],
})
export class ProductViewPage implements OnInit {

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
  constructor(private modalCtrl: ModalController) { 

  }

  ngOnInit() {
  }


}
