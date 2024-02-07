import { TestBed } from '@angular/core/testing';

import { BugRegisterService } from './bug-register.service';

describe('BugRegisterService', () => {
  let service: BugRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BugRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
