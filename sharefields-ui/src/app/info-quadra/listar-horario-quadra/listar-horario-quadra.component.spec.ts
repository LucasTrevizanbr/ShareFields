import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHorarioQuadraComponent } from './listar-horario-quadra.component';

describe('ListarHorarioQuadraComponent', () => {
  let component: ListarHorarioQuadraComponent;
  let fixture: ComponentFixture<ListarHorarioQuadraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarHorarioQuadraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarHorarioQuadraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
