import { Component, inject, Signal } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { FavoritesService } from '../services/favorites.service';
import { Movie } from '../model/movie.model';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { HighlightDirective } from '../directives/highlight.directive';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-home',
  imports: [MovieItemComponent, HighlightDirective, AsyncPipe, TranslocoPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected moviesService = inject(MoviesService);
  protected movies$: Observable<Movie[]> = inject(MoviesService).getMovies();
  protected favoriteService = inject(FavoritesService);
  protected translocoService = inject(TranslocoService)

  filter(title: string, year: string) {
    this.movies$ = this.moviesService.filterMovieList(title, year);
  }

  changeLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);
  }
}
