import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { NavigationComponent } from './navigation/navigation.component';
import { SearcheComponent } from './searche/searche.component';

const routes: Routes = [

  {
    path: 'login', // Chemin pour le composant de connexion
    component: LoginComponent, // Composant de connexion
  },
  
 
  
  
  {
    path: 'nav', // Chemin pour le composant de connexion
    component:NavigationComponent, // Composant de connexion
  },
  
 
  
  {
    path: 'search', // Chemin pour le composant de connexion
    component:SearcheComponent, // Composant de connexion
  },
  
  
  {
    path: '', // Redirection par défaut vers la page d'accueil
    redirectTo: 'home',
    pathMatch: 'full'
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
