import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { AuthService } from 'src/routes/AuthService';
import { MorePage } from 'src/app/more/more.page';

@Component({
  selector: 'app-vendeurprofile',
  templateUrl: './vendeurprofile.page.html',
  styleUrls: ['./vendeurprofile.page.scss'],
})
export class VendeurprofilePage implements OnInit {
  userEmail!: string;
  users: any[] = [];
  vendeurs: any[] = [];

  constructor(
    private menu: MenuController,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private modalCtrl: ModalController,
  ) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userEmail = params['email'];

      this.authService.getUsers().subscribe(
        (response: any[]) => {
          this.users = response.filter((user: any) => user.email === this.userEmail);
          console.log('Utilisateur récupéré avec succès', this.users);
        },
        (error) => {
          console.error('Erreur lors de la récupération de l\'utilisateur', error);
        }
      );

      this.authService.getVendeurs().subscribe(
        (response: any[]) => {
          this.vendeurs = response.filter((vendeur: any) => vendeur.email === this.userEmail);
          console.log('Vendeurs récupérés avec succès', this.vendeurs);
        },
        (error) => {
          console.error('Erreur lors de la récupération des vendeurs', error);
        }
      );
    });
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: MorePage,
      componentProps: {
        
      }
    });
  
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
    }
  }
  go() {
    // Stockez l'e-mail du vendeur dans le service partagé
    this.authService.setEmail(this.userEmail);
    // Redirigez vers la page 'CategoryViewPage'
    this.router.navigate(['/category-view'], { queryParams: { email: this.userEmail } });
  }



  
  toggleMenu() {
    this.menu.toggle();
  }

  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
