import { Component } from '@angular/core';
import { HomeHeroComponent } from '../../shared/components/home-hero/home-hero.component';
import { GetAllBreedsService } from '../../shared/services/get-all-breeds.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor() {}
}
