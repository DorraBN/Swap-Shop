
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './dorra/login/login.component'; // Importez le composant de connexion
import { ProfileComponent } from './dorra/profile/profile.component';




import { AllComponent } from './dorra/all/all.component';
import { EditComponent } from './dorra/edit/edit.component';

import { NewpostComponent } from './dorra/newpost/newpost.component';
import { PostsComponent } from './posts/posts.component';



const routes: Routes = [

  {
    path: 'login', // Chemin pour le composant de connexion
    component: LoginComponent, // Composant de connexion
  },


  {
    path: 'profile', // Chemin pour le composant de connexion
    component: ProfileComponent, // Composant de connexion
  },

  

 

  {
    path: 'all', // Chemin pour le composant de connexion
    component:AllComponent, // Composant de connexion
  },
  {
    path: 'post', // Chemin pour le composant de connexion
    component:PostsComponent, // Composant de connexion
  },
  {
    path: 'new', // Chemin pour le composant de connexion
    component:NewpostComponent, // Composant de connexion
  },
  {
    path: 'edit', // Chemin pour le composant de connexion
    component:EditComponent, // Composant de connexion
  },
 
  
  {
    path: 'plus',
    loadChildren: () => import('./plus/plus.module').then( m => m.PlusPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./dorra/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./dorra/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'favoris',
    loadChildren: () => import('./dorra/favoris/favoris.module').then( m => m.FavorisPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./dorra/home/home.module').then( m => m.HomePageModule),
  
  },
  {
    path: 'home2',
    loadChildren: () => import('./dorra/home2/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./dorra/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./dorra/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'nav',
    loadChildren: () => import('./dorra/nav/nav.module').then( m => m.NavPageModule)
  },
  {
    path: 'searche',
    loadChildren: () => import('./dorra/searche/searche.module').then( m => m.SearchePageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./dorra/filter/filter.module').then( m => m.FilterPageModule)
  },
  {
    path: 'home3',
    loadChildren: () => import('./dorra/home3/home3.module').then( m => m.Home3PageModule)
  },
  {
    path: 'admin-main-page',
    loadChildren: () => import('./admin-main-page/admin-main-page.module').then( m => m.AdminMainPagePageModule)
  },

  {
    path: 'vendeur-ventes',
    loadChildren: () => import('./vendeur-ventes/vendeur-ventes.module').then( m => m.VendeurVentesPageModule)
  },
  {
    path: 'vendeur-categories',
    loadChildren: () => import('./vendeur-categories/vendeur-categories.module').then( m => m.VendeurCategoriesPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'ajoutervendeur',
    loadChildren: () => import('./ajoutervendeur/ajoutervendeur.module').then( m => m.AjoutervendeurPageModule)
  },
  {
    path: 'categories-ajouter',
    loadChildren: () => import('./categories-ajouter/categories-ajouter.module').then( m => m.CategoriesAjouterPageModule)
  },
  {
    path: 'statics',
    loadChildren: () => import('./dorra/statics/statics.module').then( m => m.StaticsPageModule)
  },
  {
    path: 'dashv',
    loadChildren: () => import('./dorra/dashv/dashv.module').then( m => m.DashvPageModule)
  },
  {
    path: 'cart-page',
    loadChildren: () => import('./cart-page/cart-page.module').then( m => m.CartPagePageModule)
  },
  {
    path: 'electronic',
    loadChildren: () => import('./electronic/electronic.module').then( m => m.ElectronicPageModule)
  },
  {
    path: 'headerpaim',
    loadChildren: () => import('./headerpaim/headerpaim.module').then( m => m.HeaderpaimPageModule)
  },
  {
    path: 'livres',
    loadChildren: () => import('./livres/livres.module').then( m => m.LivresPageModule)
  },
  {
    path: 'productdetails',
    loadChildren: () => import('./productdetails/productdetails.module').then( m => m.ProductdetailsPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./dorra/users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'buyers',
    loadChildren: () => import('./dorra/buyers/buyers.module').then( m => m.BuyersPageModule)
  },
  {
    path: 'vendeurs',
    loadChildren: () => import('./dorra/vendeurs/vendeurs.module').then( m => m.VendeursPageModule)
  },
  {
    path: 'adminprofile',
    loadChildren: () => import('./dorra/adminprofile/adminprofile.module').then( m => m.AdminprofilePageModule)
  },
  {
    path: 'vendeurprofile',
    loadChildren: () => import('./dorra/vendeurprofile/vendeurprofile.module').then( m => m.VendeurprofilePageModule)
  },
  {
    path: 'ajouter-produit',
    loadChildren: () => import('./ajouter-produit/ajouter-produit.module').then( m => m.AjouterProduitPageModule)
  },
  {
    path: 'ajouter-vendeur',
    loadChildren: () => import('./ajouter-vendeur/ajouter-vendeur.module').then( m => m.AjouterVendeurPageModule)
  },
  {
    path: 'category-view',
    loadChildren: () => import('./category-view/category-view.module').then( m => m.CategoryViewPageModule)
  },
  {
    path: 'product-view',
    loadChildren: () => import('./product-view/product-view.module').then( m => m.ProductViewPageModule)
  },
  {
    path: 'product-edit',
    loadChildren: () => import('./product-edit/product-edit.module').then( m => m.ProductEditPageModule)
  },  {
    path: 'sellers',
    loadChildren: () => import('./sellers/sellers.module').then( m => m.SellersPageModule)
  },
  {
    path: 'seller-view',
    loadChildren: () => import('./seller-view/seller-view.module').then( m => m.SellerViewPageModule)
  },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
