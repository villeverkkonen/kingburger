import { TestBed } from '@angular/core/testing';

import { IngredientsStoreService } from './ingredients-store.service';

describe('IngredientsStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngredientsStoreService = TestBed.get(IngredientsStoreService);
    expect(service).toBeTruthy();
  });
});
