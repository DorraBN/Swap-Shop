import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Importez le composant de connexion
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { Home1Component } from './home1/home1.component';

import { NavigationComponent } from './navigation/navigation.component';
import { Home2Component } from './home2/home2.component';
import { AllComponent } from './all/all.component';
import { EditComponent } from './edit/edit.component';
import { SearcheComponent } from './searche/searche.component';
import { NewpostComponent } from './newpost/newpost.component';
import { PostsComponent } from './posts/posts.component';
import { MeublesComponent } from './meubles/meubles.component';


const routes: Routes = [

  {
    path: 'login', // Chemin pour le composant de connexion
    component: LoginComponent, // Composant de connexion
  },
  {
    path: 'home1', // Chemin pour le composant de connexion
    component: Home1Component, // Composant de connexion
  },
  {
    path: 'home2', // Chemin pour le composant de connexion
    component: Home2Component, // Composant de connexion
  },
  {
    path: 'profile', // Chemin pour le composant de connexion
    component: ProfileComponent, // Composant de connexion
  },
  {
    path: 'signup', // Chemin pour le composant de connexion
    component: SignupComponent, // Composant de connexion
  },
  
  {
    path: 'sign', // Chemin pour le composant de connexion
    component:SigninComponent, // Composant de connexion
  },
  {
    path: 'nav', // Chemin pour le composant de connexion
    component:NavigationComponent, // Composant de connexion
  },
 
  {
    path: 'meubles', // Chemin pour le composant de connexion
    component:MeublesComponent, // Composant de connexion
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
    path: 'search', // Chemin pour le composant de connexion
    component:SearcheComponent, // Composant de connexion
  },
  
  
  {
    path: '', // Redirection par défaut vers la page d'accueil
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'plus',
    loadChildren: () => import('./plus/plus.module').then( m => m.PlusPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
