import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerSemestreComponent } from './primer-semestre.component';

describe('PrimerSemestreComponent', () => {
  let component: PrimerSemestreComponent;
  let fixture: ComponentFixture<PrimerSemestreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimerSemestreComponent]
    });
    fixture = TestBed.createComponent(PrimerSemestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
