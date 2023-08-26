import { TestBed } from '@angular/core/testing';

import { CatalogParameterService } from './catalog-parameter.service';

describe('CatalogParameterService', () => {
  let service: CatalogParameterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogParameterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
