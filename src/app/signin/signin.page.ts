import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor(private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  redirectToHome2() {
    this.router.navigate(['/home2']); // Assurez-vous que '/home2' correspond au chemin vers votre page "home2"
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

