import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from 'src/routes/AuthService';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.page.html',
  styleUrls: ['./adminprofile.page.scss'],
})
export class AdminprofilePage implements OnInit {
  username: string = '';
  profileImageUrl: string = '';
  
  constructor(private menu: MenuController,private router: Router,private authService: AuthService) { }




  // Suppose this method is called after successful login
  getUserInfo(credentials: any): Observable<string> {
    return new Observable<string>((observer) => {
      this.authService.getUsernameAfterLogin(credentials).subscribe(
        (response) => {
          // Assuming the username is returned in the response
          const username = response.user.username;
          observer.next(username); // Retourne le nom d'utilisateur via l'observer
          observer.complete(); // Signale que l'observable est terminé
        },
        (error) => {
          console.error('Error fetching username:', error);
          observer.error(error); // Retourne une erreur si la récupération du nom d'utilisateur échoue
          observer.complete(); // Signale que l'observable est terminé
        }
      );
    });
  }
  








  
  ngOnInit() {}

  toggleMenu() {
    this.menu.toggle();
  }
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
