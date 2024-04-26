import { Component, OnInit } from '@angular/core';
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
  imageUrl: string | undefined;
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
