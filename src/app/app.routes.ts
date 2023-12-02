import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { breedsResolver } from './shared/resolvers/breeds.resolver';

export const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
    pathMatch: 'full',
    resolve: { breedData: breedsResolver },
  },
  { component: NotFoundComponent, path: '**' },
];
