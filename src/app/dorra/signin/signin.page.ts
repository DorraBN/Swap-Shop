import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  constructor( private loadingController: LoadingController,private router: Router) {}
  ngOnInit(): void {
    
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

}
