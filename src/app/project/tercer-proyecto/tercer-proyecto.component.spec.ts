import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TercerProyectoComponent } from './tercer-proyecto.component';

describe('TercerProyectoComponent', () => {
  let component: TercerProyectoComponent;
  let fixture: ComponentFixture<TercerProyectoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TercerProyectoComponent]
    });
    fixture = TestBed.createComponent(TercerProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
