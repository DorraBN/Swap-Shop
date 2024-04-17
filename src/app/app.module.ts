import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { CommonModule } from '@angular/common'; 

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { NavigationComponent } from './navigation/navigation.component';
import { SearcheComponent } from './searche/searche.component';
=======
import { RouterModule, Routes } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router'; // Import manquant pour RouteReuseStrategy



import { DetailsComponent } from './details/details.component';
>>>>>>> 8353bd8d1aa4e4bdd0908bae58d0f76050c62ef4



import { NewpostComponent } from './newpost/newpost.component';


import { ProfileComponent } from './profile/profile.component';

import { PreloadAllModules} from '@angular/router';
import { AllComponent } from './all/all.component';
import { EditComponent } from './edit/edit.component';

import { PostsComponent } from './posts/posts.component';

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






@NgModule({
<<<<<<< HEAD
  declarations: [AppComponent, NavigationComponent,  SearcheComponent, ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,  FormsModule,IonicModule,CommonModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
=======

  declarations: [AppComponent,  ProfileComponent, AllComponent, EditComponent, NewpostComponent, PostsComponent,AppComponent,AjouterVendeurComponent,AdminMainPageComponent,VendeurVentesComponent ,VendeurCategoriesComponent, AllComponent, EditComponent,  NewpostComponent, PostsComponent,  DetailsComponent,VendeurMainPageComponent],
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

  
 

>>>>>>> 8353bd8d1aa4e4bdd0908bae58d0f76050c62ef4
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Ajoutez votre schéma ici
})
export class AppModule {}