import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  private userEmail: string = '';
    constructor(private http: HttpClient) { }
    enregistrerVendeur(data: any): Observable<any> {
      return this.http.post<any>('http://localhost:3000/vendeur', data);
    }
    enregistrerProduit(data: any): Observable<any> {
      return this.http.post<any>('http://localhost:3000/produit', data);
    }
    getUsers(): Observable<any> {
      return this.http.get<any>('http://localhost:3000/users');
    }
    getProduits(): Observable<any> {
      return this.http.get<any>('http://localhost:3000/produits');
    }
  
    // Méthode pour récupérer les données des vendeurs
    getVendeurs(): Observable<any> {
      return this.http.get<any>('http://localhost:3000/vendeurs');
    }
    register(user: any): Observable<any> {

      return this.http.post<any>('http://localhost:3000/register', user);
    }
  
    login(credentials: any): Observable<any> {
      return this.http.post<any>('http://localhost:3000/login', credentials);
    }
    getUsernameAfterLogin(credentials: any): Observable<any> {
      return this.http.post<any>('http://localhost:3000/login', credentials);
    }
    // Méthode pour récupérer les données des vendeurs avec le rôle "seller"
getSellers(): Observable<any> {
  return this.http.get<any>('http://localhost:3000/seller');
}
deleteSellerByEmail(sellerEmail: string): Observable<any> {
  return this.http.delete<any>(`http://localhost:3000/seller/${sellerEmail}`);
}
deleteProductByEmail(productEmail: string): Observable<any> {
  return this.http.delete<any>(`http://localhost:3000/product/${productEmail}`);
}


setEmail(email: string) {
  this.userEmail = email;
}


setUserEmail(email: string) {
  this.userEmail = email;
}

// Méthode pour récupérer l'e-mail de l'utilisateur
getUserEmail() {
  return this.userEmail;
}
getEmail() {
  return this.userEmail;
}



  }

