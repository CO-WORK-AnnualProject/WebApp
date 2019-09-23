import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAboInformationsComponent } from './form-abo-informations.component';

describe('FormAboInformationsComponent', () => {
  let component: FormAboInformationsComponent;
  let fixture: ComponentFixture<FormAboInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAboInformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAboInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
