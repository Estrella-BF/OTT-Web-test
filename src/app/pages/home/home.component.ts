import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/entities/interface/movies.interface';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: MovieApiService){}

  bannerMoviesData: Array<IMovie> =[];
  trendingMoviesData: Array<IMovie> = [];
  actionMoviesData: Array<IMovie> = [];
  comedyMoviesData: Array<IMovie> = [];
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
      console.log('bannerApiData', result)
    })
  }


  trendingDataRequest(){
    this.service.trendingMovieApiData().subscribe((result) => {
      this.trendingMoviesData = result.results
      console.log('result', result)
      console.log('trendingMoviesData', this.trendingMoviesData);
      
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
