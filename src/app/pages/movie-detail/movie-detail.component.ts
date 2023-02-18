import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMovie } from 'src/app/entities/movies/movies.interface';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, OnDestroy {

  private paramsSub: Subscription = {} as Subscription;
  movieDetail: IMovie = {} as IMovie;

  constructor(
    private route: ActivatedRoute,
    private movieApiService: MovieApiService
  ) {}

  ngOnInit() {
    this.paramsSub = this.route.params.subscribe(params => {
      const { id } = params;
      this.callApiMovieDetail(id);
   });
  }

  callApiMovieDetail(id: number) {
    this.movieApiService.getMovieDetails(id).subscribe((response: IMovie) => {
      console.log('movieApiService', response);
      this.movieDetail = response;
    })
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
