import { Component, OnInit } from '@angular/core';
import { GameWithChancesComponent } from '../game-with-chances/game-with-chances.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [GameWithChancesComponent, CommonModule],
  templateUrl: './home-hero.component.html',
  styleUrl: './home-hero.component.scss',
})
export class HomeHeroComponent implements OnInit {
  isStarted: boolean = false;

  constructor() {}

  ngOnInit(): void {}


  onClickStartGame() {
    this.isStarted = true;
  }
}
