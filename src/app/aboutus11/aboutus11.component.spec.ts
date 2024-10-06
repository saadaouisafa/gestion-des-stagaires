import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutus11Component } from './aboutus11.component';

describe('Aboutus11Component', () => {
  let component: Aboutus11Component;
  let fixture: ComponentFixture<Aboutus11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Aboutus11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aboutus11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
