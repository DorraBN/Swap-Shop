import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-vendeur',
  templateUrl: './view-vendeur.page.html',
  styleUrls: ['./view-vendeur.page.scss'],
})
export class ViewVendeurPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }


  
  nomComplet: string | undefined = "syrine hentati";
  nomUtilisateur: string | undefined = "syrine";
  email: string | undefined = "sirinehentati2084@gmail.com";
  telephone: number | undefined = 54698214; // Declared as number
  password: string | undefined = "syrine0123";
  adresseBoutique: string | undefined = "addresse1";

  imageUrl: string | undefined ="https://ionicframework.com/docs/img/demos/card-media.png";
  

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

previewImage(event: any) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      // Assign the file path to the imageUrl variable
      this.imageUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
}