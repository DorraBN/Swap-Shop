import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.page.html',
  styleUrls: ['./newpost.page.scss'],
})
export class NewpostPage implements OnInit {

  constructor(private router: Router) {}

  goToHome2() {
    this.router.navigate(['/profile']); // Assurez-vous que '/home2' correspond au chemin vers votre page "home2"
  }
  goTopost() {
    this.router.navigate(['/post']); // Assurez-vous que '/home2' correspond au chemin vers votre page "home2"
  }

  ngOnInit() {}

}
