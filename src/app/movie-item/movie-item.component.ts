import {Component, Input, input, output} from '@angular/core';
import { Movie } from '../model/movie.model';
import { MillionDollarPipe } from '../pipes/million-dollar.pipe';
import { MinToDurationPipe } from '../pipes/min-to-duration.pipe';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  template: `
    <div class="movie-item">
      <div>
        <h4>
          <span class="icon-star" [class.active]="isFavorite()" (click)="toggleFavorite.emit(movie)"></span>
          {{ movie.title }}
        </h4>
        <small class="subtitle">
          <span>Release date: {{ movie.release_date }}</span>
          <span>Budget: {{ movie.budget | millionDollar }} </span>
          <span>Duration: {{ movie.duration | minToDuration }} </span>
        </small>
      </div>
      <button class="btn btn-soft btn-primary" [routerLink]="'details/'+ movie.id">Details</button>
    </div>
  `,
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

