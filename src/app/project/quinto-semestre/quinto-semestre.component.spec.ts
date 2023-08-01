import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuintoSemestreComponent } from './quinto-semestre.component';

describe('QuintoSemestreComponent', () => {
  let component: QuintoSemestreComponent;
  let fixture: ComponentFixture<QuintoSemestreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuintoSemestreComponent]
    });
    fixture = TestBed.createComponent(QuintoSemestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
