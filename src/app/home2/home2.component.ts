import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {

  constructor(private router: Router) {}

  onSearchFocus() {
    this.router.navigate(['/search']);
  }
  gotomeuble() {
    this.router.navigate(['/meubles']);
  }
  ngOnInit() {}
selectedNavItem: string | undefined;

  selectNavItem(navItem: string) {
    this.selectedNavItem = navItem;
}}
