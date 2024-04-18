import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-vendeur-categories-ajoutez',
  templateUrl: './vendeur-categories-ajoutez.component.html',
  styleUrls: ['./vendeur-categories-ajoutez.component.scss'],
})
export class VendeurCategoriesAjoutezComponent  implements OnInit {
  
  ngOnInit(): void {
    
  }
  constructor(private router: Router) {}

  goToHome2() {
    this.router.navigate(['/home2']); // Assurez-vous que '/home2' correspond au chemin vers votre page "home2"
  }
  
  imageUrl: string | ArrayBuffer | null = null;

  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
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

  FileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLElement;
    fileInput.click();
  }
}
