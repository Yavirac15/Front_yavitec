import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoSemestreComponent } from './segundo-semestre.component';

describe('SegundoSemestreComponent', () => {
  let component: SegundoSemestreComponent;
  let fixture: ComponentFixture<SegundoSemestreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegundoSemestreComponent]
    });
    fixture = TestBed.createComponent(SegundoSemestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
