import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadreursComponent } from './encadreurs.component';

describe('EncadreursComponent', () => {
  let component: EncadreursComponent;
  let fixture: ComponentFixture<EncadreursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EncadreursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncadreursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
