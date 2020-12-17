import { TestBed } from '@angular/core/testing';

import { ActiviterService } from './activiter.service';

describe('ActiviterService', () => {
  let service: ActiviterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiviterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
