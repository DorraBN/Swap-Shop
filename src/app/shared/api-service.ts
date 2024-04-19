import { Injectable } from '@angular/core';
import {product} from '../electronic/productmodal';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
public cartitemlist :any=[];
public productlist=new BehaviorSubject<any>([])
  constructor(private http:HttpClient) { }
getproduct(){
  return this.http.get<product[]>("https://dummyjson.com/products")
}

getProductById(id: string) {
  return this.http.get("https://dummyjson.com/products/" + id);
}
addtocart(data:product){
  this.cartitemlist.push(data);
  this.productlist.next(this.cartitemlist);
  console.log(this.cartitemlist)

}
products(){
  return this.productlist.asObservable();
}
removecartitem(data:product){
  this.cartitemlist.map((a:product,index:product)=>{
    if(data.id ===a.id){
      this.cartitemlist.splice(index,1)
    }
  })
  this.productlist.next(this.cartitemlist)
}
//total calcul
calculateprice() {
  let total = 0;
  this.cartitemlist.forEach((item: any) => {
    total += item.price; // Accumuler les prix dans la variable total
  });
  return total;
}
//remove all item
removeallitems(){
  this.cartitemlist =[];
  this.productlist.next(this.cartitemlist)
}

}