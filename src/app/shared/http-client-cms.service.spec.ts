import { TestBed } from '@angular/core/testing';

import { HttpClientCMSService } from './http-client-cms.service';

describe('HttpClientCMSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpClientCMSService = TestBed.get(HttpClientCMSService);
    expect(service).toBeTruthy();
  });
});
