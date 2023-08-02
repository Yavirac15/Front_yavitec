import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerProyectoComponent } from './primer-proyecto.component';

describe('PrimerProyectoComponent', () => {
  let component: PrimerProyectoComponent;
  let fixture: ComponentFixture<PrimerProyectoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimerProyectoComponent]
    });
    fixture = TestBed.createComponent(PrimerProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
