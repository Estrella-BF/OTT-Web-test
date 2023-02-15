import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMovie } from 'src/app/entities/movies/movies.interface';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, OnDestroy {

  constructor(private movieApiService: MovieApiService) {}

  movieDetail: IMovie = {} as IMovie;
  movieDetailSubscription: Subscription = {} as Subscription;

  ngOnInit() {
    this.movieDetailSubscription = this.movieApiService.getMovieDetail$.subscribe((response: IMovie) => {
      console.log('movieApiService', response);
      this.movieDetail = response;
    })
    
    
  }

  ngOnDestroy() {
    this.movieDetailSubscription.unsubscribe();
  }
}
