import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerFormationsComponent } from './lister-formations.component';

describe('ListerFormationsComponent', () => {
  let component: ListerFormationsComponent;
  let fixture: ComponentFixture<ListerFormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerFormationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
