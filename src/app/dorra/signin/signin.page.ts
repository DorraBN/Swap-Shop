import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../routes/AuthService';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
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


  
  onSubmit() {
    const user = this.registrationForm.value;
    this.authService.register(user).subscribe(
      (response) => { 
        console.log('Utilisateur enregistré avec succès', response);
        this.alertMessage = 'Inscription réussie. Vous pouvez vous connecter.';
        this.registrationForm.reset();

        // Redirection en fonction du rôle de l'utilisateur
        if (user.role === 'admin') {
          this.router.navigate(['/adminprofile']); // Redirige vers la page d'administration
        } else if (user.role === 'seller') {
          this.router.navigate(['/vendeurprofile']); // Redirige vers la page du vendeur
        } else {
          // Redirection par défaut, par exemple la page d'accueil
          this.router.navigate(['/home']);
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
      message: 'Loading...', // Message de chargement
      duration: 3000, // Durée du chargement (ms)
      spinner: 'circles' // Type de spinner
    });

    await loading.present(); // Afficher le chargement

    // Rediriger vers home2 après 3 secondes
    setTimeout(() => {
      loading.dismiss(); // Masquer le chargement
      this.router.navigateByUrl('/home2'); // Rediriger vers la page home2
    }, 3000);
  }
    email: string = '';
    password: string = '';
  
    signIn() {
      // Ici, vous pouvez implémenter la logique de connexion
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      
      // Par exemple, vous pouvez appeler un service d'authentification pour valider les informations d'identification.
    }
    ngOnInit(): void {
    
    }
  

}
