import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meubles',
  templateUrl: './meubles.page.html',
  styleUrls: ['./meubles.page.scss'],
})
export class MeublesPage implements OnInit {

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
