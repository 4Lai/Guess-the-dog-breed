import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn:'root'
})
export class GetAllBreedsService {
  constructor(private httpClient: HttpClient) {}

  getBreeds() {
    return this.httpClient.get<any>(
      `https://dog.ceo/api/breeds/list/all
`
    );
  }

  randomizeOrder(element: string) {
    let list: any = document.getElementById(element);
    for (let i = list.children.length; i >= 0; i--) {
      list.appendChild(list.children[(Math.random() * i) | 0]);
    }
  }
}
