import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsStagaireComponent } from './details-stagaire.component';

describe('DetailsStagaireComponent', () => {
  let component: DetailsStagaireComponent;
  let fixture: ComponentFixture<DetailsStagaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsStagaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsStagaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
