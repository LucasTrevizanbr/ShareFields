import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroQuadraComponent } from './cadastro-quadra.component';

describe('CadastroQuadraComponent', () => {
  let component: CadastroQuadraComponent;
  let fixture: ComponentFixture<CadastroQuadraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroQuadraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroQuadraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
