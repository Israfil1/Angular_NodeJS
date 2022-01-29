import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerFormateursComponent } from './supprimer-formateurs.component';

describe('SupprimerFormateursComponent', () => {
  let component: SupprimerFormateursComponent;
  let fixture: ComponentFixture<SupprimerFormateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerFormateursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerFormateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
