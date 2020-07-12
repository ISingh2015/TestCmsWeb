import { TestBed, async } from '@angular/core/testing';

import { HttpClientCMSService } from './http-client-cms.service';
import { HttpClientModule } from '@angular/common/http';

describe('HttpClientCMSService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ HttpClientCMSService ],
    })
    .compileComponents();
  }));


  it('should be created', () => {
    const service: HttpClientCMSService = TestBed.get(HttpClientCMSService);
    expect(service).toBeTruthy();
  });
});
