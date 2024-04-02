import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent  implements OnInit {

  constructor(private router: Router) {}

  goToProfile() {
    this.router.navigate(['/profile']); // Assurez-vous que '/profile' correspond au chemin vers votre composant de profil
  }

  ngOnInit() {}
  selectedNavItem: string | undefined;

  selectNavItem(navItem: string) {
    this.selectedNavItem = navItem;
  }
}
