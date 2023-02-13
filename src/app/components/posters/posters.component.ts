import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/entities/interface/movies.interface';

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

}
