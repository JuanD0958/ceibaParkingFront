import { TestBed, inject } from '@angular/core/testing';

import { QueryTrmService } from './query-trm.service';

describe('QueryTrmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueryTrmService]
    });
  });

  it('should be created', inject([QueryTrmService], (service: QueryTrmService) => {
    expect(service).toBeTruthy();
  }));
});
