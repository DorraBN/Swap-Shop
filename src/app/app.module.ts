import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router'; // Import manquant pour RouteReuseStrategy



import { NewpostComponent } from './newpost/newpost.component';

import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PreloadAllModules} from '@angular/router';
import { AllComponent } from './all/all.component';
import { EditComponent } from './edit/edit.component';
import { SearcheComponent } from './searche/searche.component';
import { PostsComponent } from './posts/posts.component';
import { Home2Page } from './home2/home2.page';
import { DetailPage } from './detail/detail.page';
import { SigninPage } from './signin/signin.page';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path: 'home2',
    component: Home2Page
  },
  {
    path: 'detail',
    component: DetailPage
  },{
    path: 'signin',
    component: SigninPage
  }
  ,{
    path: 'home',
    component: HomePage
  }
];


@NgModule({
  declarations: [AppComponent,  SignupComponent, ProfileComponent, NavigationComponent, AllComponent, EditComponent, SearcheComponent, NewpostComponent, PostsComponent],
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
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Ajoutez votre schéma ici
})
export class AppModule {}