import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFormateursComponent } from './ajouter-formateurs.component';

describe('AjouterFormateursComponent', () => {
  let component: AjouterFormateursComponent;
  let fixture: ComponentFixture<AjouterFormateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterFormateursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterFormateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
