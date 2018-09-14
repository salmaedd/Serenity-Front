import { TestBed, inject } from '@angular/core/testing';

import { EtpService } from './etp.service';

describe('EtpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EtpService]
    });
  });

  it('should be created', inject([EtpService], (service: EtpService) => {
    expect(service).toBeTruthy();
  }));
});
