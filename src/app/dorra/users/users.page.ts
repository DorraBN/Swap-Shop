import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {



  constructor(private router: Router) {}

 
  goback() {
    this.router.navigate(['/home2']);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  go() {
    this.router.navigate(['/info']);
  }




  goback1(){
    this.router.navigate(['/filter']);
  }
  

 

    // Initialiser swiper une fois que la vue est initialisée

 

}
