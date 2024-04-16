import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SigninComponent } from './signin/signin.component';
import { NewpostComponent } from './newpost/newpost.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Home2Component } from './home2/home2.component';
import { AllComponent } from './all/all.component';
import { EditComponent } from './edit/edit.component';
import { SearcheComponent } from './searche/searche.component';
import { PostsComponent } from './posts/posts.component';
import { MeublesComponent } from './meubles/meubles.component';
import { DetailsComponent } from './details/details.component';

import { VendeurMainPageComponent } from './vendeur-main-page/vendeur-main-page.component';
import {VendeurCategoriesComponent}  from './vendeur-categories/vendeur-categories.component';
import { VendeurCategoriesAjoutezComponent } from './vendeur-categories-ajoutez/vendeur-categories-ajoutez.component';
import {VendeurVentesComponent} from './vendeur-ventes/vendeur-ventes.component';
import { AdminMainPageComponent} from './admin-main-page/admin-main-page.component';
import { AjouterVendeurComponent } from './ajouter-vendeur/ajouter-vendeur.component';



@NgModule({
  declarations: [AppComponent,AjouterVendeurComponent,AdminMainPageComponent,VendeurVentesComponent ,SigninComponent, SignupComponent,VendeurCategoriesAjoutezComponent, ProfileComponent, NavigationComponent,Home2Component,VendeurCategoriesComponent, AllComponent, EditComponent, SearcheComponent, NewpostComponent, PostsComponent, MeublesComponent, DetailsComponent,VendeurMainPageComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,  FormsModule,IonicModule,CommonModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
