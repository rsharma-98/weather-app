import { TestBed } from '@angular/core/testing';

import { WeatherSearchService } from './weather-search.service';

describe('WeatherSearchService', () => {
  let service: WeatherSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
