import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-vendeurs',
  templateUrl: './vendeurs.page.html',
  styleUrls: ['./vendeurs.page.scss'],
})
export class VendeursPage implements OnInit {

  constructor( private router:Router,public alertController: AlertController) { }


  ngOnInit() {
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


  

  pro()
  {
    this.router.navigate(['/adminprofile']);
  }

}
