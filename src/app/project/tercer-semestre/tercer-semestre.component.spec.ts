import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TercerSemestreComponent } from './tercer-semestre.component';

describe('TercerSemestreComponent', () => {
  let component: TercerSemestreComponent;
  let fixture: ComponentFixture<TercerSemestreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TercerSemestreComponent]
    });
    fixture = TestBed.createComponent(TercerSemestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
