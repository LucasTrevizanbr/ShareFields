import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirQuadraComponent } from './excluir-quadra.component';

describe('ExcluirQuadraComponent', () => {
  let component: ExcluirQuadraComponent;
  let fixture: ComponentFixture<ExcluirQuadraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirQuadraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirQuadraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
