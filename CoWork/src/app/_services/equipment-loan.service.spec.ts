import { TestBed } from '@angular/core/testing';

import { EquipmentLoanService } from './equipment-loan.service';

describe('EquipmentLoanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EquipmentLoanService = TestBed.get(EquipmentLoanService);
    expect(service).toBeTruthy();
  });
});
