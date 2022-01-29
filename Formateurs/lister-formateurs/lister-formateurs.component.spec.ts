import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerFormateursComponent } from './lister-formateurs.component';

describe('ListerFormateursComponent', () => {
  let component: ListerFormateursComponent;
  let fixture: ComponentFixture<ListerFormateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerFormateursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerFormateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
