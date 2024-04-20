import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.page.html',
  styleUrls: ['./nav.page.scss'],
})
export class NavPage implements OnInit {

  constructor(private router: Router) {}

  goToProfile() {
    this.router.navigate(['/profile']); // Assurez-vous que '/profile' correspond au chemin vers votre composant de profil
  }
  goToFavoris(){
    this.router.navigate(['/favoris'])
  }

  ngOnInit() {}
  selectedNavItem: string | undefined;

  selectNavItem(navItem: string) {
    this.selectedNavItem = navItem;
  }

}
