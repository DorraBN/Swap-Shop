import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-headerpaim',
  templateUrl: './headerpaim.component.html',
  styleUrls: ['./headerpaim.component.scss'],
})
export class HeaderpaimComponent  implements OnInit {
  public cartitems:number=0;
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.products().subscribe(res=>{
      this.cartitems=res.length;
    })
  }

}
