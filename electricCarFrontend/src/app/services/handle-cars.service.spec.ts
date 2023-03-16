import { TestBed } from '@angular/core/testing';

import { HandleCarsService } from './handle-cars.service';

describe('HandleCarsService', () => {
  let service: HandleCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
