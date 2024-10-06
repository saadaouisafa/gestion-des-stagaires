import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListstagairesComponent } from './liststagaires.component';

describe('ListstagairesComponent', () => {
  let component: ListstagairesComponent;
  let fixture: ComponentFixture<ListstagairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListstagairesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListstagairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
