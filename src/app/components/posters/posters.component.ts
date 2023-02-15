import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { IMovie } from 'src/app/entities/movies/movies.interface';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-posters',
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.css']
})
export class PostersComponent {

  @Input()
  title: string = '';

  @Input()
  moviesList: IMovie[] = []
  movieDetailSelected: IMovie = {} as IMovie;

  constructor(private router: Router, private movieApiService: MovieApiService) {}


  showDetail(id: number) {
   this.movieApiService.getMovieDetails(id).subscribe((movie: IMovie) => {
      this.movieDetailSelected = movie;

      // with redirect
      this.movieApiService.setMovieDetail(this.movieDetailSelected);
      this.router.navigateByUrl(`movie/${id}`);
    });

  }


}
