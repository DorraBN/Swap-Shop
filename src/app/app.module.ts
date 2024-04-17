import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD

=======
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common'; 
>>>>>>> branch1
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router'; // Import manquant pour RouteReuseStrategy



import { NewpostComponent } from './newpost/newpost.component';


import { ProfileComponent } from './profile/profile.component';

import { PreloadAllModules} from '@angular/router';
import { AllComponent } from './all/all.component';
import { EditComponent } from './edit/edit.component';

import { PostsComponent } from './posts/posts.component';
<<<<<<< HEAD
import { Home2Page } from './home2/home2.page';
import { DetailPage } from './detail/detail.page';
import { SigninPage } from './signin/signin.page';
import { HomePage } from './home/home.page';
import { SignupPage } from './signup/signup.page';
import { FilterPage } from './filter/filter.page';
const routes: Routes = [
  { path: 'home2', component: Home2Page },
  { path: 'detail', component: DetailPage },
  { path: 'signin', component: SigninPage },
  { path: 'home', component: HomePage },
  { path: 'signup', component: SignupPage },
  { path: 'filter', component: FilterPage },
];

=======
import { MeublesComponent } from './meubles/meubles.component';
import { DetailsComponent } from './details/details.component';

import { VendeurMainPageComponent } from './vendeur-main-page/vendeur-main-page.component';
import {VendeurCategoriesComponent}  from './vendeur-categories/vendeur-categories.component';
import { VendeurCategoriesAjoutezComponent } from './vendeur-categories-ajoutez/vendeur-categories-ajoutez.component';
import {VendeurVentesComponent} from './vendeur-ventes/vendeur-ventes.component';
import { AdminMainPageComponent} from './admin-main-page/admin-main-page.component';
import { AjouterVendeurComponent } from './ajouter-vendeur/ajouter-vendeur.component';
>>>>>>> branch1



@NgModule({
<<<<<<< HEAD
  declarations: [AppComponent,  ProfileComponent, AllComponent, EditComponent, NewpostComponent, PostsComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) // Ajoutez vos routes ici
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy } // Ajoutez votre fournisseur de stratégie de réutilisation ici
  ],
=======
  declarations: [AppComponent,AjouterVendeurComponent,AdminMainPageComponent,VendeurVentesComponent ,SigninComponent, SignupComponent,VendeurCategoriesAjoutezComponent, ProfileComponent, NavigationComponent,Home2Component,VendeurCategoriesComponent, AllComponent, EditComponent, SearcheComponent, NewpostComponent, PostsComponent, MeublesComponent, DetailsComponent,VendeurMainPageComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,  FormsModule,IonicModule,CommonModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
>>>>>>> branch1
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Ajoutez votre schéma ici
})
export class AppModule {}