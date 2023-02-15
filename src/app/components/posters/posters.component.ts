import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from 'src/app/entities/interface/movies.interface';
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

  constructor(private router: Router, private movieApiService: MovieApiService) {}

  showDetail(id: number) {
    this.router.navigateByUrl(`detail`)
 /*    this.movieApiService.getMovieDetails(id).subscribe(res => {
      console.log('detail', res);
      
    }) */
  }


}
