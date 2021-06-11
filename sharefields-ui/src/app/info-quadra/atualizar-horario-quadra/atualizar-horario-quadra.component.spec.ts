import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarHorarioQuadraComponent } from './atualizar-horario-quadra.component';

describe('AtualizarHorarioQuadraComponent', () => {
  let component: AtualizarHorarioQuadraComponent;
  let fixture: ComponentFixture<AtualizarHorarioQuadraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarHorarioQuadraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarHorarioQuadraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
