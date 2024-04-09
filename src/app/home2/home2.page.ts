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

  onSearchFocus() {
    this.router.navigate(['/search']);
  }
  gotomeuble() {
    this.router.navigate(['/detail']);
  }
  ngOnInit() {}
selectedNavItem: string | undefined;

  selectNavItem(navItem: string) {
    this.selectedNavItem = navItem;
}
}
