import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstagaireComponent } from './newstagaire.component';

describe('NewstagaireComponent', () => {
  let component: NewstagaireComponent;
  let fixture: ComponentFixture<NewstagaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewstagaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewstagaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
