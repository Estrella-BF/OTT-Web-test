import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: MovieApiService){}

  bannerMoviesData: any =[];
  trendingMoviesData: any = [];
  actionMoviesData: any = [];
  comedyMoviesData: any = [];
  adventureMoviesData: any = [];

  ngOnInit(): void {
    this.bannerMovieDataRequest();
    this.trendingDataRequest();
    this.actionDataRequest();
    this.adventureDataRequest();
    this.comedyDataRequest();
  }

  bannerMovieDataRequest(){
    this.service.bannerApiData().subscribe((result) => {
      this.bannerMoviesData = result.results;
    })
  }


  trendingDataRequest(){
    this.service.trendingMovieApiData().subscribe((result) => {
      this.trendingMoviesData = result.results
    })
  }

  actionDataRequest(){
    this.service.trendingMovieApiData().subscribe((result) => {
      this.actionMoviesData = result.results
    })
  }

  comedyDataRequest(){
    this.service.fetchComedyMovies().subscribe((result) => {
      this.comedyMoviesData = result.results
    })
  }

  adventureDataRequest(){
    this.service.fetchAdventureMovies().subscribe((result) => {
      this.adventureMoviesData = result.results
    })
  }
}
