import { Component, OnInit } from '@angular/core';
import { RandomBreedImageService } from '../../services/random-breed-image.service';
import { Breed } from '../../interfaces/breed';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-game-with-chances',
  standalone: true,
  imports: [TitleCasePipe, CommonModule],
  templateUrl: './game-with-chances.component.html',
  styleUrl: './game-with-chances.component.scss',
  providers: [RandomBreedImageService],
})
export class GameWithChancesComponent implements OnInit {
  notWorkingBreeds: string[] = [];
  allBreeds: any = this.activatedRoute.snapshot.data['breedData'].filter(
    (el: any) => {
      if (
        el === 'kelpie' ||
        el === 'bakharwal' ||
        el === 'cavapoo' ||
        el === 'chippiparai' ||
        el === 'gaddi' ||
        el === 'greyhound' ||
        el === 'kombai' ||
        el === 'mastiff' ||
        el === 'mudhol' ||
        el === 'pariah' ||
        el === 'pitbull' ||
        el === 'rajapalayam' ||
        el === 'sheepdog' ||
        el === 'spitz'
      ) {
        this.notWorkingBreeds.push(el);
        return;
      } else {
        return el;
      }
    }
  );
  highestScore: number = 0;
  score: number = 0;
  fourBreeds: Breed[] = [];
  randomImage: any = [];
  valueImg2: string = '';
  failed: boolean = false;

  constructor(
    private randomBreedImage: RandomBreedImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.randomFourBreeds()

    this.valueImg2 = this.randomValueImg();

    this.randomBreedImage.getRandomImage(this.valueImg2).subscribe((el) => {
      this.randomImage = el;
    })
  }

  randomValueImg() {
    return this.fourBreeds[
      Math.floor(Math.random() * this.fourBreeds.length)
    ].toString();
  }

  restartGame() {
    let li = document.querySelectorAll(
      '.game-with-chances--container-list-ans'
    );

    li.forEach((el) => {
      el.classList.remove('correct', 'wrong');
    });

    this.checkScore();
    this.score = 0;
    this.failed = false;
    this.fourBreeds = [];

    this.randomFourBreeds()
    this.valueImg2 = this.randomValueImg();

    this.randomBreedImage.getRandomImage(this.valueImg2).subscribe((el) => {
      this.randomImage = el;
    })
  }

  checkScore() {
    if (this.score > this.highestScore || this.score === this.highestScore) {
      this.highestScore = this.score;
    }
  }

  randomFourBreeds() {
    this.fourBreeds.push(
      this.allBreeds[Math.floor(Math.random() * this.allBreeds.length)],
      this.allBreeds[Math.floor(Math.random() * this.allBreeds.length)],
      this.allBreeds[Math.floor(Math.random() * this.allBreeds.length)],
      this.allBreeds[Math.floor(Math.random() * this.allBreeds.length)]
    );
  }

  onClick(value: string) {
    this.checkScore();

    if (this.valueImg2 === value) {
      this.score++;
      this.checkScore();
      this.fourBreeds = [];

      this.randomFourBreeds()
      this.valueImg2 = this.randomValueImg();

      this.randomBreedImage.getRandomImage(this.valueImg2).subscribe((el) => {
        this.randomImage = el;
      })
    } else {
      let li = document.querySelectorAll(
        '.game-with-chances--container-list-ans'
      );
      this.failed = true;
      li.forEach((el) => {
        if (el.textContent?.toLowerCase() === this.valueImg2) {
          el.classList.add('correct');
        } else {
          el.classList.add('wrong');
        }
      });
    }
  }
}
