
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/routes/AuthService';

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {

  userEmail!: string;
  users: any[] = [];
  vendeurs: any[] = [];
  

  constructor(
    private menu: MenuController,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,

  ) { }
  

  togo()
  {
    this.router.navigate(['/more'])
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userEmail = params['email'];

      this.authService.getUsers().subscribe(
        (response: any[]) => { // Ajouter une annotation de type pour response
          // Filtrer les utilisateurs pour récupérer seulement celui correspondant à l'e-mail de l'utilisateur actuel
          this.users = response.filter((user: any) => user.email === this.userEmail); // Ajouter une annotation de type pour user
          console.log('Utilisateur récupéré avec succès', this.users);
        },
        (error) => {
          console.error('Erreur lors de la récupération de l\'utilisateur', error);
        }
      );

      this.authService.getVendeurs().subscribe(
        (response: any[]) => { // Ajouter une annotation de type pour response
          // Filtrer les vendeurs pour récupérer seulement ceux correspondant à l'e-mail de l'utilisateur actuel
          this.vendeurs = response.filter((vendeur: any) => vendeur.email === this.userEmail); // Ajouter une annotation de type pour vendeur
          console.log('Vendeurs récupérés avec succès', this.vendeurs);
        },
        (error) => {
          console.error('Erreur lors de la récupération des vendeurs', error);
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
