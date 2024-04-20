import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home3',
  templateUrl: './home3.page.html',
  styleUrls: ['./home3.page.scss'],
})
export class Home3Page implements OnInit {

  constructor( private router :Router) { }

go(){
  this.router.navigate(['/signin']);
}

  ngOnInit() {
  }

}
