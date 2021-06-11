import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoHorarioQuadraComponent } from './novo-horario-quadra.component';

describe('NovoHorarioQuadraComponent', () => {
  let component: NovoHorarioQuadraComponent;
  let fixture: ComponentFixture<NovoHorarioQuadraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoHorarioQuadraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoHorarioQuadraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
