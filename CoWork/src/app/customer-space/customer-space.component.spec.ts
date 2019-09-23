import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSpaceComponent } from './customer-space.component';

describe('CustomerSpaceComponent', () => {
  let component: CustomerSpaceComponent;
  let fixture: ComponentFixture<CustomerSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
