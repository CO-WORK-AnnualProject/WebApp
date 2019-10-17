import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentLoanFormComponent } from './equipment-loan-form.component';

describe('EquipmentLoanFormComponent', () => {
  let component: EquipmentLoanFormComponent;
  let fixture: ComponentFixture<EquipmentLoanFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentLoanFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentLoanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
