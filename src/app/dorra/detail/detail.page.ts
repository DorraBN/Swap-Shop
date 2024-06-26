import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  swiperInitialized = false;

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
  

  ngAfterViewInit() {
    // Définition des options de swiper
    const swiperOptions = {
      // Ajoutez vos options ici
      // Par exemple:
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    };

    // Initialiser swiper une fois que la vue est initialisée
    const swiper = new Swiper('.swiper-container', swiperOptions);
    this.swiperInitialized = true;
  }


}
