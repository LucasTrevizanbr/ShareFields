import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirHorarioQuadraComponent } from './excluir-horario-quadra.component';

describe('ExcluirHorarioQuadraComponent', () => {
  let component: ExcluirHorarioQuadraComponent;
  let fixture: ComponentFixture<ExcluirHorarioQuadraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirHorarioQuadraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirHorarioQuadraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
