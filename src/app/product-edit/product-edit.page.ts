import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.page.html',
  styleUrls: ['./product-edit.page.scss'],
})
export class ProductEditPage implements OnInit {
 
  product: any = { id: 1, image: '../../assets/m2.jpeg', title: 'Deux chaises', description: 'Some description here', rating: 4 };
 
  generateRange(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }

  color: any;
  password: any;
 
  id: number | undefined=1;
  imageUrl: string | ArrayBuffer | null='../../assets/m2.jpeg';
  title: string | undefined='Deux chaises';
  description: string | undefined='Some description here';
  rating: number = 4;
  category: string | undefined="meubles";


  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
  constructor(router:Router,private modalCtrl: ModalController) { }
  confirm() {
    
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
