import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.scss'],
})
export class LivresComponent  implements OnInit {

 
  constructor(private router: Router) {}

  goToHome2() {
    this.router.navigate(['/home2']); // Assurez-vous que '/home2' correspond au chemin vers votre page "home2"
  }
  isLiked = false; // Initialize liked state for each list item
  isCommentVisible = true;

  post = {
    author: "James Elden",
    image: "../../assets/sales.jpg",
    caption: "Caption for post",
    likes: 123,
    comments: 20
  };
  // Déclaration de l'objet produit
  productDetails = {
    image: "../../assets/sales.jpg",
    description: "Description du produit",
    price: 19.99,
    sellerName: "James Elden"
  };
  goToProductDetails() {
    this.router.navigate(['/productdetails'], { state: { product: this.productDetails } });
  }

  // Function to toggle like button
  toggleLike() {
    this.isLiked = !this.isLiked;
  }
  

  // Function to toggle comment visibility
  toggleComment() {
    this.isCommentVisible = !this.isCommentVisible;
  }

  ngOnInit() {}

}
