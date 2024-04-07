import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.page.html',
  styleUrls: ['./favoris.page.scss'],
})
export class FavorisPage implements OnInit {
  option = {
    slidesPerView: 1.4,
    spaceBetween: 0,
    centeredSlides: true,
  };
  constructor() { }

  ngOnInit() {
  }

}
