import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-vendeur',
  templateUrl: './edit-vendeur.page.html',
  styleUrls: ['./edit-vendeur.page.scss'],
})
export class EditVendeurPage implements OnInit {

  ngOnInit(): void {
    
  }
  
  nomComplet: string | undefined = "syrine hentati";
  nomUtilisateur: string | undefined = "syrine";
  email: string | undefined = "sirinehentati2084@gmail.com";
  telephone: number | undefined = 54698214; // Declared as number
  password: string | undefined = "syrine0123";
  adresseBoutique: string | undefined = "addresse1";

  imageUrl: string | undefined ="https://ionicframework.com/docs/img/demos/card-media.png";
  constructor(private modalCtrl: ModalController) {}

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
     const formData = {
      nomComplet: this.nomComplet,
      nomUtilisateur: this.nomUtilisateur,
      email: this.email,
      telephone: this.telephone,
      password: this.password,
      adresseBoutique: this.adresseBoutique,
      
      imageUrl: this.imageUrl,
    };
    this.modalCtrl.dismiss(formData, 'confirm');
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

  FileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLElement;
    fileInput.click();
  }

}
