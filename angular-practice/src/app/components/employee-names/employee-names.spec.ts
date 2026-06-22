import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNames } from './employee-names';

describe('EmployeeNames', () => {
  let component: EmployeeNames;
  let fixture: ComponentFixture<EmployeeNames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeNames],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeNames);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
