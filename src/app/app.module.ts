import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieApiService } from './services/movie-api.service';
import { HttpClientModule } from '@angular/common/http';

import {ReactiveFormsModule} from '@angular/forms';
import { PostersComponent } from './components/posters/posters.component'
import { AngularFireAuth, SETTINGS as AUTH_SETTINGS } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailComponent,
    SearchComponent,
    MovieDetailComponent,
    PostersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDVJG7jUGOgr8fENv9UD08-oMZjWVvt-98",
      authDomain: "fzth-globant.firebaseapp.com",
      projectId: "fzth-globant",
      storageBucket: "fzth-globant.appspot.com",
      messagingSenderId: "294846167973",
      appId: "1:294846167973:web:10b4d8b8e984a14406064c"
    }),
  ],
  providers: [MovieApiService, AngularFireAuth, { provide: AUTH_SETTINGS, useValue: { appVerificationDisabledForTesting: true } },],
  bootstrap: [AppComponent]
})
export class AppModule { }
