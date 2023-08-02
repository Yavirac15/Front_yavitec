import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartoProyectoComponent } from './cuarto-proyecto.component';

describe('CuartoProyectoComponent', () => {
  let component: CuartoProyectoComponent;
  let fixture: ComponentFixture<CuartoProyectoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuartoProyectoComponent]
    });
    fixture = TestBed.createComponent(CuartoProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
