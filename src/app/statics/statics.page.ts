import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statics',
  templateUrl: './statics.page.html',
  styleUrls: ['./statics.page.scss'],
})
export class StaticsPage implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }


  pro()
  {
    this.router.navigate(['/profile']);
  }

}
