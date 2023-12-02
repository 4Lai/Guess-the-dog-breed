import { Injectable } from '@angular/core';
import { GameWithChancesComponent } from '../components/game-with-chances/game-with-chances.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: GameWithChancesComponent
})
export class RandomBreedImageService {

  constructor(private httpClient: HttpClient) { }

  getRandomImage(breed: string) {
    return this.httpClient.get<any>(
      `https://dog.ceo/api/breed/${breed}/images/random`
    );
  }
}
