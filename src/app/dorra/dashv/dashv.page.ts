import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashv',
  templateUrl: './dashv.page.html',
  styleUrls: ['./dashv.page.scss'],
})
export class DashvPage implements OnInit {


  constructor( private router:Router) { }

  ngOnInit() {
  }


  pro()
  {
    this.router.navigate(['/vendeurprofile']);
  }


}
