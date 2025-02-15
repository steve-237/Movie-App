import { Component, inject, Signal } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { FavoritesService } from '../services/favorites.service';
import { Movie } from '../model/movie.model';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { HighlightDirective } from '../directives/highlight.directive';

@Component({
  selector: 'app-home',
  imports: [MovieItemComponent, HighlightDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected movies: Signal<Movie[]> = inject(MoviesService).getMovies();
  protected favoriteService = inject(FavoritesService);
}
