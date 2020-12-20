import { TestBed } from '@angular/core/testing';

import { ApiRestaurantService } from './api-restaurant.service';

describe('ApiRestaurantService', () => {
  let service: ApiRestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
