import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerStagiairesComponent } from './lister-stagiaires.component';

describe('ListerStagiairesComponent', () => {
  let component: ListerStagiairesComponent;
  let fixture: ComponentFixture<ListerStagiairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerStagiairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerStagiairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
