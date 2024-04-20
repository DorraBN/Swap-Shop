import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-vente',
  templateUrl: './view-vente.page.html',
  styleUrls: ['./view-vente.page.scss'],
})
export class ViewVentePage implements OnInit {

  email: string = 'john@example.com';
  category: string = 'Clothing';
  itemName: string = 'T-Shirt';
  price: string = '$20';
  id: number = 1;

  constructor(private modalCtrl: ModalController) { }

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  ngOnInit() {
  }

}
