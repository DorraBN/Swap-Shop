import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})


  export class SigninComponent {
    email: string = '';
    password: string = '';
  
    signIn() {
      // Ici, vous pouvez implémenter la logique de connexion
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      
      // Par exemple, vous pouvez appeler un service d'authentification pour valider les informations d'identification.
    }
  }

