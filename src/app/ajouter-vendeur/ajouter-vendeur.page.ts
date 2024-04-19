import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ajouter-vendeur',
  templateUrl: './ajouter-vendeur.page.html',
  styleUrls: ['./ajouter-vendeur.page.scss'],
})
export class AjouterVendeurPage implements OnInit {

  ngOnInit(): void {
    
  }
  nomComplet: string | undefined;
  nomUtilisateur: string | undefined;
  email: string | undefined;
  telephone: string | undefined;
  password: string | undefined;
  adresseBoutique: string | undefined;

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    // Gather the data and send it back to the caller
    const formData = {
      nomComplet: this.nomComplet,
      nomUtilisateur: this.nomUtilisateur,
      email: this.email,
      telephone: this.telephone,
      password: this.password,
      adresseBoutique: this.adresseBoutique,
    };
    this.modalCtrl.dismiss(formData, 'confirm');
  }
}