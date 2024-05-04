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

  constructor(private menu: MenuController, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    // Suppose this method is called after successful login
    this.getUserInfo().subscribe(
      (username) => {
        this.username = username; // Assign the username to a component variable
      },
      (error) => {
        console.error('Error fetching username:', error);
      }
    );
  }

  getUserInfo(): Observable<string> {
    // Here, you don't need to pass credentials, assuming they are handled internally in your service
    return new Observable<string>((observer) => {
      this.authService.getUsernameAfterLogin(Credential).subscribe(
        (response) => {
          // Assuming the username is returned in the response
          const username = response.user.username;
          observer.next(username); // Returns the username via the observer
          observer.complete(); // Signals that the observable is complete
        },
        (error) => {
          console.error('Error fetching username:', error);
          observer.error(error); // Returns an error if fetching username fails
          observer.complete(); // Signals that the observable is complete
        }
      );
    });
  }

  toggleMenu() {
    this.menu.toggle();
  }

  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
