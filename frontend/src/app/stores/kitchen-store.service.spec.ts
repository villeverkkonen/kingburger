import { TestBed } from '@angular/core/testing';

import { KitchenStoreService } from './kitchen-store.service';

describe('KitchenStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KitchenStoreService = TestBed.get(KitchenStoreService);
    expect(service).toBeTruthy();
  });
});
