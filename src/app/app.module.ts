import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { CommonModule } from '@angular/common'; 

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router'; // Import manquant pour RouteReuseStrategy



import { DetailsComponent } from './details/details.component';


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
import { AdminMainPagePage } from './admin-main-page/admin-main-page.page';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'home2', component: Home2Page },
  { path: 'detail', component: DetailPage },
  { path: 'signin', component: SigninPage },
  { path: 'home', component: HomePage },
  { path: 'signup', component: SignupPage },
  { path: 'filter', component: FilterPage },
  { path: 'admin', component: AdminMainPagePage},

];






@NgModule({

  declarations: [AppComponent,  ProfileComponent, AllComponent, EditComponent, NewpostComponent, PostsComponent,AppComponent, AllComponent, EditComponent,  NewpostComponent, PostsComponent,  DetailsComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) // Ajoutez vos routes ici
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy } // Ajoutez votre fournisseur de stratégie de réutilisation ici
  ],

  
 

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Ajoutez votre schéma ici
})
export class AppModule {}