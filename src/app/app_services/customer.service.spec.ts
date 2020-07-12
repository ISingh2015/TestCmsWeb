import { TestBed, async } from '@angular/core/testing';

import { CustomerService } from './customer.service';
import { HttpClientModule } from '@angular/common/http';

describe('CustomerService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ CustomerService ],
    })
    .compileComponents();
  }));


  it('should be created', () => {
    const service: CustomerService = TestBed.get(CustomerService);
    expect(service).toBeTruthy();
  });
});
