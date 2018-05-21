import { TestBed, inject } from '@angular/core/testing';

import { RetireVehicleService } from './retire-vehicle.service';

describe('RetireVehicleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetireVehicleService]
    });
  });

  it('should be created', inject([RetireVehicleService], (service: RetireVehicleService) => {
    expect(service).toBeTruthy();
  }));
});
