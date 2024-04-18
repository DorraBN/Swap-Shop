import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';

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
import { DetailsComponent } from './Details/details.component';
import { LivresComponent } from './livres/livres.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { HeaderpaimComponent } from './headerpaim/headerpaim.component';
import { CartPageComponent } from './cart-page/cart-page.component';


@NgModule({
  declarations: [AppComponent, SigninComponent, SignupComponent, ProfileComponent, NavigationComponent,Home2Component, AllComponent, EditComponent, SearcheComponent, NewpostComponent, PostsComponent, MeublesComponent, DetailsComponent,LivresComponent,ProductdetailsComponent,ElectronicComponent,HeaderpaimComponent,CartPageComponent],
  imports: [HttpClientModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule,  FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
