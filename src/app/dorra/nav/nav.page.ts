import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../routes/AuthService';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.page.html',
  styleUrls: ['./nav.page.scss'],
})
export class NavPage implements OnInit {
  [x: string]: any;

  constructor(private router: Router ,private authService:AuthService ) {}

  goToProfile() {
    const userRole = this.authService.getUserRole();
  
    switch (userRole) {
      case 'admin':
        this.router.navigate(['/adminprofile']);
        break;
      case 'seller':
        this.router.navigate(['/vendeurprofile']);
        break;
      default:
        this.router.navigate(['/userprofile']);
    }
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
