import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetAllBreedsService {
  constructor(private httpClient: HttpClient) {}

  getBreeds() {
    return this.httpClient.get<any>(
      `https://dog.ceo/api/breeds/list/all
`
    );
  }
}
