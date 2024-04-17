import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Importez le composant de connexion
import { ProfileComponent } from './profile/profile.component';
<<<<<<< HEAD




=======
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { Home1Component } from './home1/home1.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Home2Component } from './home2/home2.component';
>>>>>>> branch1
import { AllComponent } from './all/all.component';
import { EditComponent } from './edit/edit.component';

import { NewpostComponent } from './newpost/newpost.component';
import { PostsComponent } from './posts/posts.component';
<<<<<<< HEAD


=======
import { MeublesComponent } from './meubles/meubles.component';
import { DetailsComponent } from './details/details.component';

import { VendeurMainPageComponent } from './vendeur-main-page/vendeur-main-page.component';
import { VendeurVentesComponent } from './vendeur-ventes/vendeur-ventes.component';
import{VendeurCategoriesComponent} from './vendeur-categories/vendeur-categories.component';
import { VendeurCategoriesAjoutezComponent } from './vendeur-categories-ajoutez/vendeur-categories-ajoutez.component';
import { AdminMainPageComponent} from './admin-main-page/admin-main-page.component';
import { AjouterVendeurComponent } from './ajouter-vendeur/ajouter-vendeur.component';
>>>>>>> branch1

const routes: Routes = [

  {
    path: 'login', // Chemin pour le composant de connexion
    component: LoginComponent, // Composant de connexion
  },{
    path: 'ajoutervendeur', // Chemin pour le composant de connexion
    component: AjouterVendeurComponent, // Composant de connexion
  },
<<<<<<< HEAD


=======
  {
    path: 'ajouter', // Chemin pour le composant de connexion
    component: VendeurCategoriesAjoutezComponent, // Composant de connexion
  },
  {
    path: 'categories', // Chemin pour le composant de connexion
    component: VendeurCategoriesComponent, // Composant de connexion
  },
  {
    path: 'Admin', // Chemin pour le composant de connexion
    component: AdminMainPageComponent, // Composant de connexion
  },
  {
    path: 'ventes', // Chemin pour le composant de connexion
    component: VendeurVentesComponent, // Composant de connexion
  },
  
  {
    path: 'vendeur', // Chemin pour le composant de connexion
    component: VendeurMainPageComponent, // Composant de connexion
  },
  
  {
    path: 'home1', // Chemin pour le composant de connexion
    component: Home1Component, // Composant de connexion
  },
  {
    path: 'home2', // Chemin pour le composant de connexion
    component: Home2Component, // Composant de connexion
  },
>>>>>>> branch1
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
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
