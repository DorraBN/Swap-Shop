import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router from '@angular/router'
import { ApiService } from '../shared/api.service';
import { product } from '../electronic/productmodal';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss'],
})
export class ProductdetailsComponent implements OnInit {
  productdata:any|product;
  public cartitems:number=0;
 showadd:boolean=true;
 showremove:boolean=false;
  constructor(private activatedroute: ActivatedRoute, private router: Router,private api:ApiService) {} // Inject Router

  gotoelectronic() {
    this.router.navigate(['/electronic']); // Use this.router
  }

  ngOnInit() :void{
   let productid=this.activatedroute.snapshot.paramMap.get('productid');
   //console.log("product id is",productid)
  productid && this.api.getProductById(productid).subscribe((res)=>{
    this.productdata=res;
    console.log(res)
  })
  
}

  addtocart(productdata:product){
this.showadd=false;
this.showremove=true;
this.api.addtocart(productdata)
  }
  removeitem(productdata:product){
    this.showadd=true;
    this.showremove=false;
    this.api.removecartitem(productdata)
  }
}
