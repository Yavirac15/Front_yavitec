import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartoSemestreComponent } from './cuarto-semestre.component';

describe('CuartoSemestreComponent', () => {
  let component: CuartoSemestreComponent;
  let fixture: ComponentFixture<CuartoSemestreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuartoSemestreComponent]
    });
    fixture = TestBed.createComponent(CuartoSemestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
