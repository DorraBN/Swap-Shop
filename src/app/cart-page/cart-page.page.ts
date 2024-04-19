import { Component, OnInit } from '@angular/core';

import { ApiService } from '../shared/api-service';
import { Router } from '@angular/router';
import { product } from '../electronic/productmodal';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.page.html',
  styleUrls: ['./cart-page.page.scss'],
})
export class CartPagePage implements OnInit {

  showproduct:any=[];
public totalamount:number=0;
  constructor(private router: Router,private api:ApiService) { }
  goToelectronic() {
    this.router.navigate(['/electronic']);
  }
  ngOnInit() {
    this.api.products().subscribe(res=>{
      this.showproduct=res;
      this.totalamount= this.api.calculateprice();
      console.log("total amt is",this.totalamount)
    })
  }
deleteitem(item:product){
  this.api.removecartitem(item)

}
Empty(){
  this.api.removeallitems();
}

}
