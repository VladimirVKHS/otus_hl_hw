import { TestBed } from '@angular/core/testing';

import { CountersApiService } from './counters-api.service';

describe('CountersApiService', () => {
  let service: CountersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
