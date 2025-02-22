import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "details/:id", loadComponent: () => import('./details/details.component').then((m) => m.DetailsComponent)},
    {path: "favorite", loadComponent: () => import('./favorites-list/favorites-list.component').then((m) => m.FavoritesListComponent)}
];
