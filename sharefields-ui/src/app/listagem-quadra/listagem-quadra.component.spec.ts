import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemQuadraComponent } from './listagem-quadra.component';

describe('ListagemQuadraComponent', () => {
  let component: ListagemQuadraComponent;
  let fixture: ComponentFixture<ListagemQuadraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemQuadraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemQuadraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
