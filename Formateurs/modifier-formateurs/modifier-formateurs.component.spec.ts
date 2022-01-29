import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFormateursComponent } from './modifier-formateurs.component';

describe('ModifierFormateursComponent', () => {
  let component: ModifierFormateursComponent;
  let fixture: ComponentFixture<ModifierFormateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierFormateursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierFormateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
