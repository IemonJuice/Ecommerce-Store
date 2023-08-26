import { TestBed } from '@angular/core/testing';

import { GetCoordinatesWhenScrollingService } from './get-coordinates-when-scrolling.service';

describe('GetCoordinatesWhenScrollingService', () => {
  let service: GetCoordinatesWhenScrollingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCoordinatesWhenScrollingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
