import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  selectedNavItem: string | undefined;

  selectNavItem(navItem: string) {
    this.selectedNavItem = navItem;
  }
}
