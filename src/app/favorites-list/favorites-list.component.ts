import { Component, inject } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { MovieItemComponent } from '../movie-item/movie-item.component';

@Component({
  selector: 'app-favorites-list',
  imports: [MovieItemComponent],
  templateUrl: './favorites-list.component.html',
  styleUrl: './favorites-list.component.scss'
})
export class FavoritesListComponent {
  protected favoritesService = inject(FavoritesService);
}
