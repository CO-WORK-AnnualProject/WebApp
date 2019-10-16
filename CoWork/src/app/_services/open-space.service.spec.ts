import { TestBed } from '@angular/core/testing';

import { OpenSpaceService } from './open-space.service';

describe('OpenSpaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenSpaceService = TestBed.get(OpenSpaceService);
    expect(service).toBeTruthy();
  });
});
