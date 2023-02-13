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
    ReactiveFormsModule
  ],
  providers: [MovieApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
