import { TestBed } from '@angular/core/testing';

import { KeyValuesService } from './key-values.service';

describe('KeyValuesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeyValuesService = TestBed.get(KeyValuesService);
    expect(service).toBeTruthy();
  });
});
