import { TestBed } from '@angular/core/testing';

import { BurgerStoreService } from './burger-store.service';

describe('BurgerStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BurgerStoreService = TestBed.get(BurgerStoreService);
    expect(service).toBeTruthy();
  });
});
