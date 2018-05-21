import { TestBed, inject } from '@angular/core/testing';

import { RegisterVehicleService } from './register-vehicle.service';

describe('RegisterVehicleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterVehicleService]
    });
  });

  it('should be created', inject([RegisterVehicleService], (service: RegisterVehicleService) => {
    expect(service).toBeTruthy();
  }));
});
