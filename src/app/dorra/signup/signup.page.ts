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
      password: ['', Validators.required],
      role: ['', Validators.required],
      profileImage: ['', Validators.required],
    });
  }
  
  onSubmit() {
    const user = this.registrationForm.value;
    this.authService.register(user)
      .pipe(
        catchError(error => {
          console.error('Erreur lors de l\'enregistrement', error);
          this.alertMessage = 'Erreur lors de l\'enregistrement. Veuillez réessayer!';
          return throwError(error);
        })
      )
      .subscribe(
        (response: any) => { 
          console.log('Utilisateur enregistré avec succès', response);
          this.alertMessage = 'Inscription réussie. Vous pouvez vous connecter.';
          this.registrationForm.reset();
        },
        (error: any) => { 
          console.error('Erreur lors de l\'enregistrement', error);
          this.alertMessage = 'Erreur lors de l\'enregistrement. Veuillez réessayer!';
        }
      );
  }

  ngOnInit() {
  }

}
