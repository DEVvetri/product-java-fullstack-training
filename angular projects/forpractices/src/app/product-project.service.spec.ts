import { TestBed } from '@angular/core/testing';

import { ProductProjectService } from './product-project.service';

describe('ProductProjectService', () => {
  let service: ProductProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
