import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketFormAddComponent } from './ticket-form-add.component';

describe('TicketFormAddComponent', () => {
  let component: TicketFormAddComponent;
  let fixture: ComponentFixture<TicketFormAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketFormAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
