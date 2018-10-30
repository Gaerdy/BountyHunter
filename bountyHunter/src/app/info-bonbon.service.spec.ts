import { TestBed } from '@angular/core/testing';

import { InfoBonbonService } from './info-bonbon.service';

describe('InfoBonbonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoBonbonService = TestBed.get(InfoBonbonService);
    expect(service).toBeTruthy();
  });
});
