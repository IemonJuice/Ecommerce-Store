import { TestBed } from '@angular/core/testing';

import { GetProductsQuantityService } from './app-get-products-quantity.service';

describe('AppGetProductsQuantityService', () => {
  let service: GetProductsQuantityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProductsQuantityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
