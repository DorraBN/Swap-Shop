import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  
  cards: any[] = [
    { 
      title: 'Card 1', 
      email: 'example1@example.com', 
      location: 'Location 1', 
      image: 'https://ionicframework.com/docs/img/demos/card-media.png"' 
    },
    { 
      title: 'Card 2', 
      email: 'example2@example.com', 
      location: 'Location 2', 
      image: 'https://ionicframework.com/docs/img/demos/card-media.png"' 
    },
    { 
      title: 'Card 3', 
      email: 'example3@example.com', 
      location: 'Location 3', 
      image: 'https://ionicframework.com/docs/img/demos/card-media.png"' 
    },
    { 
      title: 'Card 4', 
      email: 'example4@example.com', 
      location: 'Location 4', 
      image: 'https://ionicframework.com/docs/img/demos/card-media.png"' 
    }
  ];

  action1() {
    console.log('Action 1 clicked');
    // Add your logic for action 1 here
  }


  constructor(private menu: MenuController, private router: Router) { }
  
 
  goToHome2() {
    this.router.navigate(['/home2']); // Assurez-vous que '/home2' correspond au chemin vers votre page "home2"
  }

  ngOnInit() {}

  ajouter(){
    this.router.navigate(['/ajouter-vendeur']);
  }

  Delete(){
    
  }
  Edit(){}

  toggleMenu() {
    this.menu.toggle();
  }

  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}