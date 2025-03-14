import {Component, Input, input, output} from '@angular/core';
import { Movie } from '../model/movie.model';
import { MillionDollarPipe } from '../pipes/million-dollar.pipe';
import { MinToDurationPipe } from '../pipes/min-to-duration.pipe';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  standalone: true,
  styleUrls: [ 'movie-item.component.scss' ],
  imports: [
    MillionDollarPipe,
    MinToDurationPipe,
    RouterLink,
  ]
})
export class MovieItemComponent {
  @Input() movie: Movie;
  isFavorite = input<boolean>(false);
  toggleFavorite = output<Movie>();
}

