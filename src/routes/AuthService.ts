import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: any = {};
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
  getUserRole(): string {
    // Récupérer les informations d'authentification depuis le local storage
    const authData = localStorage.getItem('authData');
    if (authData) {
      // Analyser les données JSON pour obtenir l'objet d'authentification
      const authObject = JSON.parse(authData);
      // Retourner le rôle de l'utilisateur
      return authObject.role;
    } else {
      // Si aucune donnée d'authentification n'est trouvée, retourner une valeur par défaut
      return 'user';
    }
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

getMeubles(): Observable<any> {
  return this.http.get<any>('http://localhost:3000/meubles');
}
getVetements(): Observable<any> {
  return this.http.get<any>('http://localhost:3000/vetements');
}
getFavories(): Observable<any> {
  return this.http.get<any>('http://localhost:3000/favories');
}
addToFavorites(product: any) {
  // Envoyer une demande HTTP pour ajouter le produit aux favoris
  // Vous devrez implémenter cette fonction pour envoyer une demande au serveur
  return this.http.post<any>('http://localhost:3000/favories', product);
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
getUserData(): any {
  return this.user;
}

// Méthode pour enregistrer les données de l'utilisateur connecté après la connexion
setUserData(userData: any) {
  this.user = userData;
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

