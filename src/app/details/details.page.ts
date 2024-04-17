import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private router:Router) { }
  togopost()
  {
    this.router.navigate(['/meubles'])
  }
  ngOnInit() {}

}
