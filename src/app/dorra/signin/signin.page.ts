import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../routes/AuthService';

import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService, private loadingController: LoadingController,private router: Router) {
    this.registrationForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  registrationForm: FormGroup;
  alertMessage: string = '';

  ngOnInit(): void {}

  onSubmit() {
    const user = this.registrationForm.value;
    this.authService.login(user).subscribe(
      (response) => {
        console.log('Utilisateur enregistré avec succès', response);
        this.alertMessage = 'Inscription réussie. Vous pouvez vous connecter.';
        this.registrationForm.reset();
  
        // Stocker l'e-mail de l'utilisateur lors de la connexion
        this.authService.setUserEmail(user.email);
  
        // Redirection en fonction du rôle de l'utilisateur
        if (user.email === 'celine@gmail.com') {
          this.router.navigate(['/adminprofile']);
        } else if (response.user.role === 'seller') {
          this.router.navigate(['/vendeurprofile'], { queryParams: { email: user.email } });
        } else {
          this.router.navigate(['/home2']);
        }
      },
      (error) => {
        console.error('Erreur lors de l\'enregistrement', error);
        this.alertMessage = 'Erreur lors de l\'enregistrement. Veuillez réessayer!';
      }
    );
  }
  


  async showAndRedirect() {
    const loading = await this.loadingController.create({
      message: 'Loading...', 
      duration: 3000, 
      spinner: 'circles' 
    });

    await loading.present(); 

    setTimeout(() => {
      loading.dismiss();
    }, 3000);
  }

  // Dans la fonction de connexion
 // Dans la fonction de connexion
login() {
  // Code pour la connexion de l'utilisateur
  // Une fois connecté avec succès, stockez l'e-mail de l'utilisateur dans le service AuthService
  this.authService.setUserEmail(this.registrationForm.value.email); // Utilisez le service AuthService pour stocker l'e-mail
}

}
