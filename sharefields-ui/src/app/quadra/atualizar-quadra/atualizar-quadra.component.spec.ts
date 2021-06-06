import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarQuadraComponent } from './atualizar-quadra.component';

describe('AtualizarQuadraComponent', () => {
  let component: AtualizarQuadraComponent;
  let fixture: ComponentFixture<AtualizarQuadraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarQuadraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarQuadraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
