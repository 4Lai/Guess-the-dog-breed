import { TestBed } from '@angular/core/testing';

import { GetAllBreedsService } from './get-all-breeds.service';

describe('GetAllBreedsService', () => {
  let service: GetAllBreedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllBreedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
