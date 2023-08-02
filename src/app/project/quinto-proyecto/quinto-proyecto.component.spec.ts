import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuintoProyectoComponent } from './quinto-proyecto.component';

describe('QuintoProyectoComponent', () => {
  let component: QuintoProyectoComponent;
  let fixture: ComponentFixture<QuintoProyectoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuintoProyectoComponent]
    });
    fixture = TestBed.createComponent(QuintoProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
