import { TestBed, async } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ AuthenticationService ],
    })
    .compileComponents();
  }));


  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });

  it('service should be created and have one user', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
    // expect(service.currentUserValue).toContain('Inderjit');
  });

});
