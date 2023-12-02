import { TestBed } from '@angular/core/testing';

import { RandomBreedImageService } from './random-breed-image.service';

describe('RandomBreedImageService', () => {
  let service: RandomBreedImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomBreedImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
