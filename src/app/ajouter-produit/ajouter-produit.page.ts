import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';
import { AuthService } from 'src/routes/AuthService';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.page.html',
  styleUrls: ['./ajouter-produit.page.scss'],
})
export class AjouterProduitPage implements OnInit {
  imageUrl: string | ArrayBuffer | null = null;
  registrationForm: FormGroup;
  alertMessage: string = '';

  color: any;
  password: any;
 
  id: number | undefined;
  image: string | undefined;
  title: string | undefined;
  description: string | undefined;
  rating: number = 0;
  category: string | undefined;
  userEmail: string = '';

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
  constructor(private router:Router,private modalCtrl: ModalController,private fb: FormBuilder, private authService: AuthService, private route: ActivatedRoute, private alertController: AlertController) {
    
      this.registrationForm = this.fb.group({
        nom: ['', Validators.required],
       
        quantity: [''],
        color: [''],
        brand: [''],
        catprod:[''],
        description: ['', Validators.required],
        price: ['', Validators.required],
        profileImageURL :[''],
      });
    }

    ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        this.registrationForm.patchValue({ email: params['email'] });
      });
      this.userEmail = this.authService.getUserEmail();
    }
    
    onSubmit() {
      const data = { ...this.registrationForm.value, email: this.userEmail };
      this.authService.enregistrerProduit(data).subscribe(
        (response) => { 
          console.log('Produit enregistré avec succès', response);
          this.presentAlert();
          this.registrationForm.reset();
        },
        (error) => { 
          console.error('Erreur lors de l\'enregistrement du produit', error);
          this.alertMessage = 'Erreur lors de l\'enregistrement. Veuillez réessayer!';
        }
      );
    }
    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Succès',
        message: 'Produit ajouté avec succès.',
        buttons: ['OK']
      });
  
      await alert.present();
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
