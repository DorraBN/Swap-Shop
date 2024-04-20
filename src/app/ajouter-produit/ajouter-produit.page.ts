import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.page.html',
  styleUrls: ['./ajouter-produit.page.scss'],
})
export class AjouterProduitPage implements OnInit {
  imageUrl: string | ArrayBuffer | null = null;
  
  color: any;
  password: any;
 
  id: number | undefined;
  image: string | undefined;
  title: string | undefined;
  description: string | undefined;
  rating: number = 0;
  category: string | undefined;


  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
  constructor(router:Router,private modalCtrl: ModalController) { }
  confirm() {
    // Gather the data and send it back to the caller
    const formData = {
      title: this.title,
      description: this.description,
      rating: this.rating,
      color: this.color,
      category: this.category,
      imageUrl: this.imageUrl,
    };
    this.modalCtrl.dismiss(formData, 'confirm');
  }
  ngOnInit() {
  }
  previewImage(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
  setRating(value: number) {
    this.rating = value;
  }
  
 
  
  FileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLElement;
    fileInput.click();
  }
}
