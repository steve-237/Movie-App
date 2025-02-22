import { Movie } from './../model/movie.model';
import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favorites = signal<Movie[]>([]);

  constructor() { }

  toggleFavorite(movie: Movie): void {
    let index = this.favorites().findIndex((m) => m.id === movie.id);
    if(index == -1) {
      this.favorites.set([...this.favorites(), movie]);
    } else {
      this.favorites().splice(index, 1);
      this.favorites.set(this.favorites());
    }
  }

  isFavorite(movie: Movie): boolean {
    return this.favorites().find((m) => (m.id === movie.id)) != null;
  }

  getFavorites(): Movie[] {
    return this.favorites();
  }
}
