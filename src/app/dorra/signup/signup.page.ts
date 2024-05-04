import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../routes/AuthService';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  registrationForm: FormGroup;
  alertMessage: string = '';

  profileImageSrc: string | ArrayBuffer | null = null; // Variable pour stocker l'URL de l'image


  onProfileImageChange(event: any) {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      console.log(selectedImage.name); // Nom du fichier
      console.log(selectedImage); // Objet File complet
      // Vous pouvez maintenant utiliser le chemin ou l'objet File selon vos besoins
    }
  }

  constructor(private fb: FormBuilder, private authService: AuthService,private router:Router) {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required],
      profileImage: [''] // You can add validators for file input if needed
    });
  }
  
  onSubmit() {
    const user = this.registrationForm.value;
    this.authService.register(user).subscribe(
      (response) => { 
        console.log('Utilisateur enregistré avec succès', response);
        this.alertMessage = 'Inscription réussie. Vous pouvez vous connecter.';
        this.router.navigate(['/ajoutervendeur'], { queryParams: { email: user.email } });
        
        this.registrationForm.reset();
      },
      (error) => { 
        console.error('Erreur lors de l\'enregistrement', error);
        this.alertMessage = 'Erreur lors de l\'enregistrement. Veuillez réessayer!';
      }
    );
  }
  

  ngOnInit() {
  }

}
