import { Component, inject } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { MillionDollarPipe } from '../pipes/million-dollar.pipe';
import { MinToDurationPipe } from '../pipes/min-to-duration.pipe';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { LanguageSelectorComponent } from "../language-selector/language-selector.component";

@Component({
  selector: 'app-details',
  standalone:true,
  imports: [
    NgOptimizedImage,
    MillionDollarPipe,
    MinToDurationPipe,
    AsyncPipe,
    LanguageSelectorComponent
],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  private movieId = inject(ActivatedRoute).snapshot.paramMap.get("id") ?? "";
  protected movie$ = inject(MoviesService).getMovieDetails(this.movieId);
}
