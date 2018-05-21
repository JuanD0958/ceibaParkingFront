import { TestBed, inject } from '@angular/core/testing';

import { SearchVehicleService } from './search-vehicle.service';

describe('SearchVehicleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchVehicleService]
    });
  });

  it('should be created', inject([SearchVehicleService], (service: SearchVehicleService) => {
    expect(service).toBeTruthy();
  }));
});
