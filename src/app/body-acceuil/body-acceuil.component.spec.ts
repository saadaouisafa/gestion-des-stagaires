import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAcceuilComponent } from './body-acceuil.component';

describe('BodyAcceuilComponent', () => {
  let component: BodyAcceuilComponent;
  let fixture: ComponentFixture<BodyAcceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodyAcceuilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
