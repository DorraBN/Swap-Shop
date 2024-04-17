import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component'; 
import { NavigationComponent } from './navigation/navigation.component';
import { SearcheComponent } from './searche/searche.component';
=======
import { LoginComponent } from './login/login.component'; // Importez le composant de connexion
import { ProfileComponent } from './profile/profile.component';



import { AllComponent } from './all/all.component';
import { EditComponent } from './edit/edit.component';

import { NewpostComponent } from './newpost/newpost.component';
import { PostsComponent } from './posts/posts.component';



import { DetailsComponent } from './details/details.component';

import { VendeurMainPageComponent } from './vendeur-main-page/vendeur-main-page.component';
import { VendeurVentesComponent } from './vendeur-ventes/vendeur-ventes.component';
import{VendeurCategoriesComponent} from './vendeur-categories/vendeur-categories.component';
import { VendeurCategoriesAjoutezComponent } from './vendeur-categories-ajoutez/vendeur-categories-ajoutez.component';
import { AdminMainPageComponent} from './admin-main-page/admin-main-page.component';
import { AjouterVendeurComponent } from './ajouter-vendeur/ajouter-vendeur.component';
import { Home2Page } from './home2/home2.page';
import { SigninPage } from './signin/signin.page';
import { SignupPage } from './signup/signup.page';
import { HomePage } from './home/home.page';

>>>>>>> 8353bd8d1aa4e4bdd0908bae58d0f76050c62ef4

const routes: Routes = [

  {
    path: 'login', // Chemin pour le composant de connexion
    component: LoginComponent, // Composant de connexion
<<<<<<< HEAD
=======
  },{
    path: 'ajoutervendeur', // Chemin pour le composant de connexion
    component: AjouterVendeurComponent, // Composant de connexion
  },

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
>>>>>>> 8353bd8d1aa4e4bdd0908bae58d0f76050c62ef4
  },
  
 
  
<<<<<<< HEAD
  
  {
    path: 'nav', // Chemin pour le composant de connexion
    component:NavigationComponent, // Composant de connexion
  },
  
=======

  {
    path: 'profile', // Chemin pour le composant de connexion
    component: ProfileComponent, // Composant de connexion
  },
  {
    path: 'home2', // Chemin pour le composant de connexion
    component: Home2Page, // Composant de connexion
  },
  {
    path: 'signin', // Chemin pour le composant de connexion
    component: SigninPage, // Composant de connexion
  },
  {
    path: 'signup', // Chemin pour le composant de connexion
    component: SignupPage, // Composant de connexion
  },
  {
    path: 'home', // Chemin pour le composant de connexion
    component: HomePage, // Composant de connexion
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
>>>>>>> 8353bd8d1aa4e4bdd0908bae58d0f76050c62ef4
 
  
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
  {
    path: 'vendeur-ventes',
    loadChildren: () => import('./vendeur-ventes/vendeur-ventes.module').then( m => m.VendeurVentesPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
 
  {
    path: 'vendeur',
    loadChildren: () => import('./vendeur/vendeur.module').then( m => m.VendeurPageModule)
  },
  {
    path: 'categories-ajouter',
    loadChildren: () => import('./categories-ajouter/categories-ajouter.module').then( m => m.CategoriesAjouterPageModule)
  },
  {
    path: 'vendeur-category',
    loadChildren: () => import('./vendeur-category/vendeur-category.module').then( m => m.VendeurCategoryPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then( m => m.PostsPageModule)
  },
  {
    path: 'newpost',
    loadChildren: () => import('./newpost/newpost.module').then( m => m.NewpostPageModule)
  },
  {
    path: 'ajoutervendeur',
    loadChildren: () => import('./ajoutervendeur/ajoutervendeur.module').then( m => m.AjoutervendeurPageModule)
  },
  {
    path: 'all',
    loadChildren: () => import('./all/all.module').then( m => m.AllPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'field',
    loadChildren: () => import('./field/field.module').then( m => m.FieldPageModule)
  },
  {
    path: 'home1',
    loadChildren: () => import('./home1/home1.module').then( m => m.Home1PageModule)
  },
  {
    path: 'home2',
    loadChildren: () => import('./home2/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'meubles',
    loadChildren: () => import('./meubles/meubles.module').then( m => m.MeublesPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
