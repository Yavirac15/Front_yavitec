import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoProyectoComponent } from './segundo-proyecto.component';

describe('SegundoProyectoComponent', () => {
  let component: SegundoProyectoComponent;
  let fixture: ComponentFixture<SegundoProyectoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegundoProyectoComponent]
    });
    fixture = TestBed.createComponent(SegundoProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
