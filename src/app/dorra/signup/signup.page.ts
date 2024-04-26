import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../routes/AuthService';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  registrationForm: FormGroup;
  alertMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {
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
