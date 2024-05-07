import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {

  navCtrl: any;

  constructor(private router: Router) {}

  gotosign() {
    this.router.navigate(['/signin']);
  }

  onSearchFocus() {
    this.router.navigate(['/searche']);
  }
  gotomeuble() {
    this.router.navigate(['/meubles']);
  }
  gotovetement() {
    this.router.navigate(['/vetements']);
  }
  ngOnInit() {}
selectedNavItem: string | undefined;

  selectNavItem(navItem: string) {
    this.selectedNavItem = navItem;
}
}
