import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searche',
  templateUrl: './searche.page.html',
  styleUrls: ['./searche.page.scss'],
})
export class SearchePage implements OnInit {

  constructor(private router: Router) {}

  goToHome2() {
    this.router.navigate(['/home2']); // Assurez-vous que '/home2' correspond au chemin vers votre page "home2"
  }

  ngOnInit() {
  }

}
