import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Importez le composant de connexion
import { ProfileComponent } from './profile/profile.component';




import { AllComponent } from './all/all.component';
import { EditComponent } from './edit/edit.component';

import { NewpostComponent } from './newpost/newpost.component';
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
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'favoris',
    loadChildren: () => import('./favoris/favoris.module').then( m => m.FavorisPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
  
  },
  {
    path: 'home2',
    loadChildren: () => import('./home2/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'nav',
    loadChildren: () => import('./nav/nav.module').then( m => m.NavPageModule)
  },
  {
    path: 'searche',
    loadChildren: () => import('./searche/searche.module').then( m => m.SearchePageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then( m => m.FilterPageModule)
  },  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'ajouter-vendeur',
    loadChildren: () => import('./ajouter-vendeur/ajouter-vendeur.module').then( m => m.AjouterVendeurPageModule)
  },
  {
    path: 'vendeur-categories',
    loadChildren: () => import('./vendeur-categories/vendeur-categories.module').then( m => m.VendeurCategoriesPageModule)
  },
  {
    path: 'vendeur-categories-ajouter',
    loadChildren: () => import('./vendeur-categories-ajouter/vendeur-categories-ajouter.module').then( m => m.VendeurCategoriesAjouterPageModule)
  },
  {
    path: 'vendeur-main-page',
    loadChildren: () => import('./vendeur-main-page/vendeur-main-page.module').then( m => m.VendeurMainPagePageModule)
  },
  {
    path: 'vendeur-ventes',
    loadChildren: () => import('./vendeur-ventes/vendeur-ventes.module').then( m => m.VendeurVentesPageModule)
  },
  {
    path: 'edit-vendeur',
    loadChildren: () => import('./edit-vendeur/edit-vendeur.module').then( m => m.EditVendeurPageModule)
  },
  {
    path: 'view-vendeur',
    loadChildren: () => import('./view-vendeur/view-vendeur.module').then( m => m.ViewVendeurPageModule)
  },
  {
    path: 'view-vente',
    loadChildren: () => import('./view-vente/view-vente.module').then( m => m.ViewVentePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
