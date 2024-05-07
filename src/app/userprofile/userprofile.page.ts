import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/routes/AuthService';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage implements OnInit {

  userEmail!: string;
  users: any[] = [];
  vendeurs: any[] = [];
  

  constructor(
    private menu: MenuController,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,

  ) { }
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userEmail = params['email'];
  
      // Utilisez l'e-mail de l'utilisateur pour récupérer ses informations depuis le backend
      this.authService.getUsers().subscribe(
        (response: any[]) => {
          // Filtrer les utilisateurs pour récupérer seulement celui correspondant à l'e-mail de l'utilisateur actuel
          this.users = response.filter((user: any) => user.email === this.userEmail);
          console.log('Utilisateur récupéré avec succès', this.users);
        },
        (error) => {
          console.error('Erreur lors de la récupération de l\'utilisateur', error);
        }
      );
    });
  }
  
  go() {
    // Stockez l'e-mail du vendeur dans le service partagé
    this.authService.setEmail(this.userEmail);
    // Redirigez vers la page 'CategoryViewPage'
    this.router.navigate(['/category-view']);
}


  toggleMenu() {
    this.menu.toggle();
  }

  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
