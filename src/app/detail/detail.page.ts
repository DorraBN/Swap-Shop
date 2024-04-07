import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  swiperInitialized = false;

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
