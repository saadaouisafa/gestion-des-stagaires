import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilextComponent } from './acceuilext.component';

describe('AcceuilextComponent', () => {
  let component: AcceuilextComponent;
  let fixture: ComponentFixture<AcceuilextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcceuilextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceuilextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
