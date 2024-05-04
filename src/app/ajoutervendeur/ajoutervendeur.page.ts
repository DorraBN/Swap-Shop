import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from 'src/routes/AuthService';

@Component({
  selector: 'app-ajoutervendeur',
  templateUrl: './ajoutervendeur.page.html',
  styleUrls: ['./ajoutervendeur.page.scss'],
})
export class AjoutervendeurPage implements OnInit {

  registrationForm: FormGroup;
  alertMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private route: ActivatedRoute,private router: Router) {
    this.registrationForm = this.fb.group({
      email: ['', Validators.required], // Assurez-vous que le champ d'e-mail est inclus dans le formulaire
      NomEntreprise: ['', Validators.required],
      catprod: ['', Validators.required],
      methpay: ['', Validators.required],
      adresse: ['', Validators.required],
      methliv: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Récupérer l'e-mail depuis les paramètres de l'URL
    this.route.queryParams.subscribe(params => {
      this.registrationForm.patchValue({ email: params['email'] });
    });
  }

  onSubmit() {
    this.authService.enregistrerVendeur(this.registrationForm.value).subscribe(
      (response) => { 
        console.log('Vendeur enregistré avec succès', response);
        this.router.navigate(['/signin']);
        
        this.alertMessage = 'Inscription réussie. Vous pouvez vous connecter.';
        this.registrationForm.reset();
      },
      (error) => { 
        console.error('Erreur lors de l\'enregistrement du vendeur', error);
        this.alertMessage = 'Erreur lors de l\'enregistrement. Veuillez réessayer!';
      }
    );
  }

}
