import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { GetAllBreedsService } from '../services/get-all-breeds.service';
import { map } from 'rxjs';

export const breedsResolver: ResolveFn<any> = (route, state) => {
  const breed = inject(GetAllBreedsService)

  return breed.getBreeds().pipe(map((breed) => {
    return Object.keys(breed.message)
  }))
};
